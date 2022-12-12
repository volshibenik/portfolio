import { Injectable } from '@angular/core';

import { StorageKey } from '../types/storage-keys';

@Injectable({ providedIn: 'root' })
export class UserService {
  isAuthenticated() {
    return localStorage.getItem(StorageKey.Token); //jwt
  }
}
