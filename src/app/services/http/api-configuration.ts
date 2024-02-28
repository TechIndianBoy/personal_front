import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiConfiguration {

  baseUrl = "http://localhost/boilerplate/personal_project/web/v1/"

  login = this.baseUrl + "project/login";
  customer_InvoiceList = this.baseUrl + "project/readcustomerandinvoice";
  addCustomer = this.baseUrl + "project/addcustomer";
  addInvoice = this.baseUrl + "project/addinvoice"
}
