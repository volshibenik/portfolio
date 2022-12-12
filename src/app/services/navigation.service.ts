import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UrlRoute } from '../types/routes';


@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(
    private router: Router,
  ) {}

  goHome() {
    this.router.navigate([UrlRoute.Home]);
  }

  goLogin() {
    this.router.navigate([UrlRoute.Login]);
  }
}
