import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environmentValues } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  env = environmentValues;
  
  // private responseSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);



  constructor(private http: HttpClient,  private router: Router) { }


    IsLoggedIn(){
      return sessionStorage.getItem('userSession')!=null;
    }




  // TERRITORIES API
  // TERRITORIES API
  // TERRITORIES API
  fetchTerritoriesAPI(data: any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/territories/getTerritories.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  // SKILLS AND SERVICES API
  fetchSkillAndServicesAPI(data: any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/getServices.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  // AUTHENTICATION API :::
  // AUTHENTICATION API :::
  // AUTHENTICATION API :::
  // >>>>>>>>>>>>>>>>>>>>>>> SIGN UP
  signupAPI(data: any){

    if (data.profile_type == 'client') {
      return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/SignUpClient.php`,data).pipe(
        tap((response) => {
        })
      )
    } else {
      return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/SignUpEscort.php`,data).pipe(
        tap((response) => {
        })
      )
    }

  }

  // >>>>>>>>>>>>>>>>>>>>>>> SIGN UP
  loginAPI(data: any){
    if (data.profile_type == 'client') {
      return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/SignInClient.php`,data).pipe(
        tap((response) => {
        })
      )
    } else {
      return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/SignInEscort.php`,data).pipe(
        tap((response) => {
        })
      )
    }
  }

  // >>>>>>>>>>>>>>>>>>>>>>> RESET PASSWORD
  resetpasswordAPI(data: any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/authentication/ResetPassword.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  saveSetupAPI(data: any){

    if (data.profile_type == 'client') {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileSetupClient.php`,data).pipe(
        tap((response) => {
        })
      )
    } else {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileSetupEscort.php`,data).pipe(
        tap((response) => {
        })
      )
    }

  }


  getAgents(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/products/getAgents.php`,data).pipe(
      tap((response) => {
      })
    )
  }

  getFilteredAgents(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/products/getFilteredAgents.php`,data).pipe(
      tap((response) => {
      })
    )
  }

  
  // LINKUPS
  // LINKUPS
  sendLinkupRequestAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/sendLinkupRequest.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  // PROFILE MANAGEMENT
  // PROFILE MANAGEMENT
  deleteSingleImageAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/deleteSinglePhoto.php`,data).pipe(
      tap((response) => {
      })
    ) 
  }

  updateProfileAPI(data:any){

    if (data.account_type == 'client') {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileUpdateClient.php`,data).pipe(
        tap((response) => {
        })
      ) 
    } else {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileUpdateEscort.php`,data).pipe(
        tap((response) => {
        })
      ) 
    }
  }


  updateProfilePasswordAPI(data:any){

    if (data.account_type == 'client') {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileChangePasswordClient.php`,data).pipe(
        tap((response) => {
        })
      ) 
    } else {
      return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileChangePasswordEscort.php`,data).pipe(
        tap((response) => {
        })
      ) 
    }
  }


  
  getPendingSentRequestPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/getSentRequest.php`,data).pipe(
      tap((response) => {
      })
    ) 
  }

    
  getPendingReceivedRequestPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/getRecievedRequest.php`,data).pipe(
      tap((response) => {
      })
    ) 
  }

      
  getPendingRequestLinkupPaymentRequestPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/getRecievedRequestPendingClientPayment.php`,data).pipe(
      tap((response) => {
      })
    ) 
  }



  acceptLinkupRequestSendToPendingPaymentAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/acceptLinkup.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  rejectLinkupRequestAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/rejectLinkup.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  getGeneralNotificationAPI(data:any){


      return this.http.post(`${environmentValues.baseUrl}/users_api/notification/generalNotification.php`,data).pipe(
        tap((response) => {
        })
      )


    
  }




  getGeneralNotificationAgentAPI(data:any){


      return this.http.post(`${environmentValues.baseUrl}/users_api/notification/generalNotificationAgent.php`,data).pipe(
        tap((response) => {
        })
      )
  

    
  }


  getBusinessValuesAPI(){
    return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/bval.php`).pipe(
      tap((response) => {
      })
    )
  }


  // UPDATE WEBSITE COUNT
  // UPDATE WEBSITE COUNT
  updateVisitorCountAPI(){
    return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/visitorCount.php`).pipe(
      tap((response) => {
      })
    )
  }


  // UPDATE PROFILE COUNT
  // UPDATE PROFILE COUNT
  updateProfileVisitorCountAPI(data: any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileVisitorCount.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  updateBookmarkAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/profileManagement/profileUpdateBookmark.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  getStatisticsValuesAPI(){
    return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/statistics.php`).pipe(
      tap((response) => {
      })
    )
  }



  sendPaystackReferenceForValidation(data: any){
    return this.http.post(`${environmentValues.baseUrl}/payment_api/paystack/paystack_verification.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  activateLinkup(data: any){

    if (data.iflag == true) {

      return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/activateLinkupFromInstantRequest.php`,data).pipe(
        tap((response) => {
        })
      )
    }else{

      return this.http.post(`${environmentValues.baseUrl}/users_api/linkupRequest/activateLinkupFromPendingLinkup.php`,data).pipe(
        tap((response) => {
        })
      )
    }

  }


  activateVerification(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/verificationSystem/activateVerification.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  activateSubscription(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/SubscriptionSystem/activateSubscription.php`,data).pipe(
      tap((response) => {
      })
    )
  }






  myBabesAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/products/getMyBabes.php`,data).pipe(
      tap((response) => {
      })
    )
  }



  myClientsAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/products/getMyClients.php`,data).pipe(
      tap((response) => {
      })
    )
  }


  sendVerificationRequestAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/verificationSystem/sendVerificationRequest.php`,data).pipe(
      tap((response) => {
      })
    )
  }








  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  // APIS NOT VERIFIED 
  deleteAllImages(data:any){
    return this.http.post(`${environmentValues.baseUrl}/deleteProductPhoto.php?id=${data.user_id}`,data).pipe(
      tap((response) => {
      })
    ) 
  }






  getTerritoriesAPI(data:any){
    return this.http.post(`${environmentValues.baseUrl}/users_api/territories/getTerritories.php`,data).pipe(
      tap((response) => {
      })
    )
  }




  getPendingLinkupRequestAPI(data:any){

    if (data.account_type = 'client') {
      return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/bval.php`).pipe(
        tap((response) => {
        })
      )
    } else {
      return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/bval.php`).pipe(
        tap((response) => {
        })
      )
    }
   
  }




  // REPORT
  // REPORT
  reportUserAPI(data:any){

      return this.http.get(`${environmentValues.baseUrl}/users_api/businessMachine/bval.php`).pipe(
        tap((response) => {
        })
      )


  }



}
