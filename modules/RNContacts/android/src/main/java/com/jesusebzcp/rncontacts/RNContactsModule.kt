package com.jesusebzcp.rncontacts

import android.Manifest
import android.app.Activity
import android.content.ContentResolver
import android.content.Intent
import android.content.pm.PackageManager
import android.database.Cursor
import android.net.Uri
import android.provider.ContactsContract
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.*
import com.facebook.react.bridge.WritableNativeArray
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RNContactsModule.NAME)
class RNContactsModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext), ActivityEventListener {

  private var contactsPromise: Promise? = null

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun requestContactsPermission(promise: Promise) {
    val activity = currentActivity
    if (activity == null) {
      promise.reject("Activity doesn't exist")
      return
    }

    if (ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_CONTACTS) !=
            PackageManager.PERMISSION_GRANTED
    ) {
      contactsPromise = promise
      ActivityCompat.requestPermissions(
          activity,
          arrayOf(Manifest.permission.READ_CONTACTS),
          REQUEST_CONTACTS_PERMISSION
      )
    } else {
      promise.resolve(true)
    }
  }

  @ReactMethod
  fun getContacts(search: String?, promise: Promise) {
    val activity = currentActivity
    if (activity == null) {
      promise.reject("Activity doesn't exist")
      return
    }

    if (ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_CONTACTS) !=
            PackageManager.PERMISSION_GRANTED
    ) {
      promise.reject("Permission not granted")
      return
    }

    val contacts = WritableNativeArray()
    val contentResolver: ContentResolver = activity.contentResolver

    val uri: Uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI
    val projection: Array<String> =
        arrayOf(
            ContactsContract.CommonDataKinds.Phone.CONTACT_ID,
            ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
            ContactsContract.CommonDataKinds.Phone.NUMBER
        )

    val selection: String?
    val selectionArgs: Array<String>?

    if (search.isNullOrEmpty()) {
      selection = null
      selectionArgs = null
    } else {
      selection =
          "${ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME} LIKE ? OR ${ContactsContract.CommonDataKinds.Phone.NUMBER} LIKE ?"
      selectionArgs = arrayOf("%$search%", "%$search%")
    }

    val sortOrder = "${ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME} ASC"

    val cursor: Cursor? =
        contentResolver.query(uri, projection, selection, selectionArgs, sortOrder)
    cursor?.use {
      val contactIdIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.CONTACT_ID)
      val contactNameIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
      val contactNumberIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)

      while (it.moveToNext()) {
        val id = it.getString(contactIdIndex)
        val name = it.getString(contactNameIndex) ?: ""
        val number = it.getString(contactNumberIndex) ?: ""
        var image: String? = null

        // Obtener imagen de contacto
        val photoCursor =
            contentResolver.query(
                ContactsContract.Data.CONTENT_URI,
                arrayOf(ContactsContract.CommonDataKinds.Photo.PHOTO_URI),
                "${ContactsContract.Data.CONTACT_ID} = ? AND ${ContactsContract.Data.MIMETYPE} = ?",
                arrayOf(id, ContactsContract.CommonDataKinds.Photo.CONTENT_ITEM_TYPE),
                null
            )
        photoCursor?.use { pc ->
          if (pc.moveToFirst()) {
            image =
                pc.getString(pc.getColumnIndex(ContactsContract.CommonDataKinds.Photo.PHOTO_URI))
          }
        }

        val contact =
            WritableNativeMap().apply {
              putString("id", id)
              putString("name", name)
              putString("phoneNumber", number)
              putString("image", image ?: "")
            }
        contacts.pushMap(contact)
      }
    }

    promise.resolve(contacts)
  }

  @ReactMethod
  fun checkPermissions(promise: Promise) {
    val activity = currentActivity
    if (activity == null) {
      promise.reject("Activity doesn't exist")
      return
    }

    val permissionGranted =
        ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_CONTACTS) ==
            PackageManager.PERMISSION_GRANTED
    promise.resolve(permissionGranted)
  }

  override fun onActivityResult(
      activity: Activity?,
      requestCode: Int,
      resultCode: Int,
      data: Intent?
  ) {
    // Implementación necesaria para el método abstracto
  }

  override fun onNewIntent(intent: Intent?) {
    // Implementación necesaria para el método abstracto
  }

  init {
    reactContext.addActivityEventListener(this)
  }

  companion object {
    const val NAME = "RNContacts"
    const val REQUEST_CONTACTS_PERMISSION = 1
  }
}
