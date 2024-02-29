import { CanActivateFn, Router } from '@angular/router';
import { WebService } from './web.service';
import { inject } from '@angular/core';
import * as CryptoJS from 'crypto-js';


// ONLY SESSION ACTIVE CAN SEE PRIVATE PAGES
// ONLY SESSION ACTIVE CAN SEE PRIVATE PAGES
export const auth1Guard: CanActivateFn = (route, state) => {
  const webservice = inject(WebService);
  const router = inject(Router);

  if (webservice.IsLoggedIn()) {

    const session = sessionStorage.getItem('userSession')!;
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(session, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    var userData = JSON.parse(originalText);

    
    if (userData.date_of_birth == '' && route.url[0].path!='client' && userData.account_type == 'client') {
      
      router.navigate(['/setup/client'])
    }else if (userData.date_of_birth == '' && route.url[0].path!='escort' && userData.account_type == 'escort') {

      router.navigate(['/setup/escort'])
    }


    // MY PROFILE MANAGEMENT
    // MY PROFILE MANAGEMENT
    // MY PROFILE MANAGEMENT
    if (route.url[0].path=='profile-escort' && userData.account_type == 'client') {
      router.navigate(['/users/profile-client'])
    }

    if (route.url[0].path=='profile-client' && userData.account_type == 'escort') {
      router.navigate(['/users/profile-escort'])
    }


    // PENDING REQUEST MANAGEMENT
    // PENDING REQUEST MANAGEMENT
    // PENDING REQUEST MANAGEMENT
    if (route.url[0].path=='pending-received' && userData.account_type == 'client') {
      router.navigate(['/users/pending-sent'])
    }

    if (route.url[0].path=='pending-sent' && userData.account_type == 'escort') {
      router.navigate(['/users/pending-received'])
    }


    
    return webservice.IsLoggedIn();
  } else {
    router.navigate(['/'])
    
    return false;
  }

};