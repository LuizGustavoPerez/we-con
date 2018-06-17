import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientAreaComponent } from './client-area/client-area.component';
import { MyMenuComponent } from './my-menu/my-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClientAreaComponent,
    MyMenuComponent
  ]
})

export class UserModule { }
