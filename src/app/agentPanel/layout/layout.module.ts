import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceComponent } from '../invoice/invoice.component';
import { CustomerComponent } from '../customer/customer.component';
import { ToastComponent } from 'src/app/shared/toast/toast.component';


@NgModule({
  declarations: [
    ToastComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    CustomerComponent,
    InvoiceComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NepaliPatroModule,

  ]
})
export class LayoutModule { }
