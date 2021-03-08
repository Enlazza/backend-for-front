import IPersistentObject from './IPersistentObject';

export default interface IAlert extends IPersistentObject {
    entryId: number;
    companyId: number;
    deviceId: number;
    lowerbound: number;
    upperbound: number;
    alertName: string;
    subject: string;
    body: string;
    alertStatus: number;
}
