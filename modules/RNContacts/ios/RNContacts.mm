#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNContacts, NSObject)


RCT_EXTERN_METHOD(requestContactsPermission:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getContacts:(NSString *)search
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(checkPermissions:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)




+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
