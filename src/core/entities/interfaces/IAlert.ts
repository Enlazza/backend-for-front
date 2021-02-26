import IPersistentObject from './IPersistentObject';

export default interface IAlert extends IPersistentObject {
    name: string;
    lowerbound: number;
    upperbound: number;
    entry: string;
    subject: string;
    body: string;
    status: number;
    device_id: number;
    company_id: number;
}
