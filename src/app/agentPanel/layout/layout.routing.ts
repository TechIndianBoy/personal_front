import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { CustomerComponent } from "../customer/customer.component";
import { InvoiceComponent } from "../invoice/invoice.component";
import { AuthGuardService } from "src/app/services/auth/auth-guard.service";

export const LayoutRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "customer",
        // canActivate: [AuthGuardService],
      },
      { path: "customer", component: CustomerComponent },
      { path: "invoice", component: InvoiceComponent },
    ]
  }
]
