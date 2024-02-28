import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConfiguration } from 'src/app/services/http/api-configuration';
import { ApiService } from 'src/app/services/http/api.service';
import { ToastClientService } from 'src/app/services/toast/toast-client.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  formGroup: any
  CustomerList: any;
  submitted: boolean = false
  add_or_edit: any = 'add'
  customerId: any = ''
  constructor(
    private apiService: ApiService,
    private apiCongig: ApiConfiguration,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastClientService
  ) {
  }

  ngOnInit() {
    this.getCustomerList()
  }

  form(data?) {
    this.formGroup = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      phone: [data ? data.phone : '', Validators.required],
      email: [data ? data.email : '', Validators.required],
      address: [data ? data.address : '', Validators.required]
    })
  }

  get f() {
    return this.formGroup.controls
  }

  openModal(modal, addoredit, item) {
    this.add_or_edit = addoredit
    if (addoredit == 'edit') {
      this.customerId = item.id
      this.form(item)
    } else {
      this.form()
    }
    this.submitted = false
    this.modalService.open(modal, { centered: true, backdrop: false, size: 'md' })
  }

  getCustomerList() {
    this.apiService.get(this.apiCongig.customer_InvoiceList).subscribe((res: any) => {
      console.log(res)
      this.CustomerList = res.data.customer_detailds
    })
  }

  onSubmit(formData) {
    this.submitted = true
    if (this.formGroup.invalid) {
      return
    }
    console.log(formData)
    let payload = {
      'is_customer': 1,
      'name': formData.name,
      "phone": formData.phone,
      "email": formData.email,
      "address": formData.address
    }
    if (this.add_or_edit == 'edit') {
      payload['id'] = this.customerId
    }
    console.log('aaa Payload', payload)
    this.apiService.post(this.apiCongig.addCustomer, payload).subscribe((res: any) => {
      console.log(res)
      this.modalService.dismissAll()
      this.getCustomerList()
      this.toast.Success(res.body.data.message)
      this.submitted = false
    })
  }

}
