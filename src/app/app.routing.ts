import { MyMenuComponent } from './users/my-menu/my-menu.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRouter: Routes = [
    {path: 'about' , component: AboutComponent },
    {path: 'contact' , component: ContactComponent },
    {path: 'clientArea' , component: LoginComponent },
    {path: 'user' , component: MyMenuComponent },
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);

