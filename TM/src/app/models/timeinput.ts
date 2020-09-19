import { Customer } from './customer';
import { Project } from './project';

export interface TimeInput {
    customer: Customer;
    project: Project;
    timeSpent: number;
}