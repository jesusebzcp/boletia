package com.jesusebzcp.reactnativerncalendar

import android.Manifest
import android.app.Activity
import android.content.ContentResolver
import android.content.Intent
import android.content.pm.PackageManager
import android.database.Cursor
import android.provider.ContactsContract
import android.net.Uri
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

        if (ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED) {
            promise.reject("Permission not granted")
            return
        }

        val contacts = WritableNativeArray()
        val contentResolver: ContentResolver = activity.contentResolver

        val uri: Uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI
        val projection: Array<String> = arrayOf(
            ContactsContract.CommonDataKinds.Phone._ID,
            ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
            ContactsContract.CommonDataKinds.Phone.NUMBER
        )

        val selection: String?
        val selectionArgs: Array<String>?

        if (search.isNullOrEmpty()) {
            selection = null
            selectionArgs = null
        } else {
            selection = "${ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME} LIKE ? OR ${ContactsContract.CommonDataKinds.Phone.NUMBER} LIKE ?"
            selectionArgs = arrayOf("%$search%", "%$search%")
        }

        val cursor: Cursor? = contentResolver.query(uri, projection, selection, selectionArgs, null)
        cursor?.use {
            val idIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone._ID)
            val nameIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
            val numberIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)

            while (it.moveToNext()) {
                val id = it.getString(idIndex)
                val name = it.getString(nameIndex)
                val number = it.getString(numberIndex)

                val contact = WritableNativeMap().apply {
                    putString("name", name)
                    putString("phoneNumber", number)
                    putString("id", id)
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
