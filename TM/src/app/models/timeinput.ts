import { Customer } from './customer';
import { Project } from './project';

export interface TimeInput {
    id: number;
    projectId: number;
    projectName: string;
    timeSpent: number;
    customerId: number;
    customerName: string;
}