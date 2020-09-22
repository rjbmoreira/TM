import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { Project } from '../models/project';
import { TimeInput } from '../models/timeinput';

@Injectable({
  providedIn: 'root'
})
export class DBAccessService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get("https://localhost:5001/tm.api/customer").pipe(
      catchError(this.handleError)
    );
  }

  addCustomer(customer: Customer){
    return this.http.post("https://localhost:5001/tm.api/customer",customer).pipe(
      catchError(this.handleError)
    );
  }

  getProjects(){
    return this.http.get("https://localhost:5001/tm.api/project").pipe(
      catchError(this.handleError)
    );
  }

  getProjectsByCustomer(cId: number){
    return this.http.get("https://localhost:5001/tm.api/project/bycustomer/"+cId).pipe(
      catchError(this.handleError)
    );
  }

  addProject(project: Project){
    return this.http.post("https://localhost:5001/tm.api/project",project).pipe(
      catchError(this.handleError)
    );
  }

  registerTime(timeInput: TimeInput){
    return this.http.post("https://localhost:5001/tm.api/timeinput",timeInput).pipe(
      catchError(this.handleError)
    );
  }

  getTimeInputs(){
    return this.http.get("https://localhost:5001/tm.api/timeinput").pipe(
      catchError(this.handleError)
    );
  }

  /*
  From documentation. 
  */
  //TODO improve it.
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
