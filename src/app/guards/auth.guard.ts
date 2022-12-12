import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

import { UserService } from '../services/user.service';
import { UrlRoute } from '../types/routes';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private navigationService: NavigationService,
  ) {}

  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.navigationService.goLogin();

      return false;
    }
    return true;
  }
}