import Contacts
@objc(RNContacts)
class RNContacts: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
    @objc(requestContactsPermission:rejecter:)
      func requestContactsPermission(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
          let store = CNContactStore()
          let status = CNContactStore.authorizationStatus(for: .contacts)
          
          if status == .notDetermined {
              store.requestAccess(for: .contacts) { granted, error in
                  if granted {
                      resolve(true)
                  } else {
                      reject("PERMISSION_DENIED", "Permission not granted", error)
                  }
              }
          } else if status == .authorized {
              resolve(true)
          } else {
              reject("PERMISSION_DENIED", "Permission not granted", nil)
          }
      }
    
    @objc
    func getContacts(_ search:String?, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
               let store = CNContactStore()
               let keys = [CNContactIdentifierKey, CNContactGivenNameKey, CNContactFamilyNameKey, CNContactPhoneNumbersKey, CNContactImageDataKey] as [CNKeyDescriptor]
               let request = CNContactFetchRequest(keysToFetch: keys)
               var contacts = [[String: Any]]()

               do {
                   try store.enumerateContacts(with: request) { contact, stop in
                       var contactDict = [String: Any]()
                       let name = "\(contact.givenName) \(contact.familyName)"
                       contactDict["id"] = contact.identifier
                       contactDict["name"] = name

                       let phoneNumber = contact.phoneNumbers.first?.value.stringValue
                       contactDict["phoneNumber"] = phoneNumber ?? NSNull()

                       if let imageData = contact.imageData {
                           contactDict["image"] = imageData.base64EncodedString()
                       } else {
                           contactDict["image"] = NSNull()
                       }


                   }
                   resolve(contacts)
               } catch {
                   reject("FETCH_FAILED", "Failed to fetch contacts", error)
               }
           }


    
    
}
