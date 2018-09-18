import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule,
         MatSelectModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MultilevelComponent } from './multilevel/multilevel.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { NgZone } from '@angular/core';

const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [NoLoginGuard] },
  { path: '', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: '**', component: LoginComponent,canActivate: [NoLoginGuard] },
  { path: 'inicio', component: MyNavComponent, canActivate: [LoginGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    MultilevelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    PanelMenuModule,
    ButtonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatSelectModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
