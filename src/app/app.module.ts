import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomePageComponent } from './views/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
