import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from '../../views/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class LoginModule { }
