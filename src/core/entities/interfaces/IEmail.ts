import IPersistentObject from "./IPersistentObject";

export default interface IEmail extends IPersistentObject {
    companyId: number;
    alertID: number;
    email: string;
}