import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { VerificationPageComponent } from './pages/verification-page/verification-page.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'reset',
        component: ResetPasswordComponent
    },
    {
        path: 'verification/:correo',
        component: VerificationPageComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }


];
