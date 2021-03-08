import IPersistentObject from "./IPersistentObject";

export default interface IPhone extends IPersistentObject {
    companyId: number;
    alertID: number;
    number: string;
}