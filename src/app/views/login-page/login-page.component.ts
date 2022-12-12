import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationService } from 'src/app/services/navigation.service';
import { StorageKey } from 'src/app/types/storage-keys';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  hide = true;

  constructor(
    private navigationService: NavigationService,
  ) {}

  login() {
    localStorage.setItem(StorageKey.Token, '123');

    this.navigationService.goHome();
  }
}
