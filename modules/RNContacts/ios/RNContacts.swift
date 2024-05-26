import Contacts
@objc(RNContacts)
class RNContacts: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }

   @objc(checkPermissions:rejecter:)
    func checkPermissions(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      let status = CNContactStore.authorizationStatus(for: .contacts)
      if status == .authorized {
        resolve(true)
      } else {
        resolve(false)
      }
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
    
    @objc(getContacts:withResolver:withRejecter:)
     func getContacts(_ search: String?, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
       let store = CNContactStore()
       let keys = [CNContactIdentifierKey, CNContactGivenNameKey, CNContactFamilyNameKey, CNContactPhoneNumbersKey, CNContactImageDataKey] as [CNKeyDescriptor]
       let request = CNContactFetchRequest(keysToFetch: keys)
       var contacts = [[String: Any]]()

       do {
         try store.enumerateContacts(with: request) { contact, stop in
           var contactDict = [String: Any]()
           let name = "\(contact.givenName) \(contact.familyName)"
           let phoneNumber = contact.phoneNumbers.first?.value.stringValue ?? ""
           
           // Filtrar por nombre o teléfono si se proporciona una búsqueda
           if let search = search, !search.isEmpty {
             let lowercasedSearch = search.lowercased()
             if name.lowercased().contains(lowercasedSearch) || phoneNumber.contains(lowercasedSearch) {
               contactDict["id"] = contact.identifier
               contactDict["name"] = name
               contactDict["phoneNumber"] = phoneNumber.isEmpty ? NSNull() : phoneNumber

               if let imageData = contact.imageData {
                 contactDict["image"] = imageData.base64EncodedString()
               } else {
                 contactDict["image"] = NSNull()
               }
               
               contacts.append(contactDict)
             }
           } else {
             // Si no se proporciona búsqueda, agrega todos los contactos
             contactDict["id"] = contact.identifier
             contactDict["name"] = name
             contactDict["phoneNumber"] = phoneNumber.isEmpty ? NSNull() : phoneNumber

             if let imageData = contact.imageData {
               contactDict["image"] = imageData.base64EncodedString()
             } else {
               contactDict["image"] = NSNull()
             }

             contacts.append(contactDict)
           }
         }
         resolve(contacts)
       } catch {
         reject("FETCH_FAILED", "Failed to fetch contacts", error)
       }
     }
    
   
   



    
    
}
