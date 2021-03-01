import IPersistentObject from './IPersistentObject';

export default interface IAlert extends IPersistentObject {
    name: string;
    lowerbound: number;
    upperbound: number;
    entry: string;
    subject: string;
    body: string;
    status: number;
    deviceId: number;
    companyId: number;
}
