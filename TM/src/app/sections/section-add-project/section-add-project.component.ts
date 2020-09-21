import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { DBAccessService } from 'src/app/services/dbaccess.service';

@Component({
  selector: 'app-section-add-project',
  templateUrl: './section-add-project.component.html',
  styleUrls: ['./section-add-project.component.css']
})
export class SectionAddProjectComponent implements OnInit {

  
  constructor(private dbaccess: DBAccessService,
    private formBuilder: FormBuilder
    ) { }

    addProjectForm: FormGroup;
    customers: Customer[] = [
      //{ id:10, name: "customer 1", email: "c1@example.com", phone: "+351911111111" }
    ];
    
    getCustomers(): void {
      this.dbaccess.getCustomers()
        .subscribe(res => {
          console.log('Result from getCustomers: ', res);
          this.customers = res as Customer[];          
        });
    }

  ngOnInit(): void {
    this.getCustomers();

    this.addProjectForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      customerSelect: ['', [Validators.required]],
      description: ''
    })
  }

  onSubmit(addProjectFormValue){

    console.warn('Your form has been submitted', addProjectFormValue);
    this.addProjectForm.reset();

  }

}
