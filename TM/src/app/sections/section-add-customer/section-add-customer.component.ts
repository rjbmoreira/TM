import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-section-add-customer',
  templateUrl: './section-add-customer.component.html',
  styleUrls: ['./section-add-customer.component.css']
})
export class SectionAddCustomerComponent implements OnInit {

  addCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    
   }

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ''
    })
  }

  onSubmit(addCustomerFormValue){

    console.warn('Your form has been submitted', addCustomerFormValue);
    this.addCustomerForm.reset();

  }
}
