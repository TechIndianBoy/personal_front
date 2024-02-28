import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConfiguration } from 'src/app/services/http/api-configuration';
import { ApiService } from 'src/app/services/http/api.service';
import { ToastClientService } from 'src/app/services/toast/toast-client.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  formGroup: any
  CustomerList: any;
  InvoiceList: any
  submitted: boolean = false
  add_or_edit: any = 'add'
  InvoiceId: any = ''
  constructor(
    private apiService: ApiService,
    private apiCongig: ApiConfiguration,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastClientService

  ) {
  }

  ngOnInit() {
    this.getInvoiceList()
  }

  form(data?) {
    this.formGroup = this.fb.group({
      name: [data ? data.customer_id : '', Validators.required],
      amount: [data ? data.amount : '', Validators.required],
      date: [data ? data.date : '', Validators.required],
      status: [data ? data.status : '', Validators.required]
    })
  }

  get f() {
    return this.formGroup.controls
  }

  openModal(modal, addoredit, item) {
    this.add_or_edit = addoredit
    if (addoredit == 'edit') {
      this.InvoiceId = item.id
      this.form(item)
    } else {
      this.form()
    }
    this.submitted = false
    this.modalService.open(modal, { centered: true, backdrop: false, size: 'md' })
  }

  getInvoiceList() {
    this.apiService.get(this.apiCongig.customer_InvoiceList).subscribe((res: any) => {
      console.log(res)
      this.CustomerList = res.data.customer_detailds
      this.InvoiceList = res.data.invoice_details
    })
  }

  onSubmit(formData) {
    this.submitted = true
    if (this.formGroup.invalid) {
      return
    }
    console.log(formData)
    let payload = {
      'is_customer': 0,
      'customer_id': formData.name,
      "amount": formData.amount,
      "invoice_date": formData.date,
      "status": formData.status
    }
    if (this.add_or_edit == 'edit') {
      payload['id'] = this.InvoiceId
    }
    console.log('aaa Payload', payload)
    this.apiService.post(this.apiCongig.addCustomer, payload).subscribe((res: any) => {
      console.log(res)
      this.toast.Success(res.body.data.message)
      this.modalService.dismissAll()
      this.getInvoiceList()
      this.submitted = false
    })
  }
}
