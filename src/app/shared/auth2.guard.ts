import { CanActivateFn, Router } from '@angular/router';
import { WebService } from './web.service';
import { inject } from '@angular/core';


export const auth2Guard: CanActivateFn = (route, state) => {
  const webservice = inject(WebService);
  const router = inject(Router);

  // if (webservice.IsLoggedIn()) {
    
  //   router.navigate(['/'])

  // } else {
    
  // }

  if (webservice.IsLoggedIn()) {
      router.navigate(['/users'])
  }

  return true;

};
