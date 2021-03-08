import IAlert from '../../../entities/interfaces/IAlert';
import IDevice from '../../../entities/interfaces/IDevice';
import IEntry from '../../../entities/interfaces/IEntry';
import IResponse from '../../../entities/interfaces/IResponse';
import IEmail from '../../../entities/interfaces/IEmail';
import IPhone from '../../../entities/interfaces/IPhone';

export default interface IAlertRepository {
    getByCompanyId(id: number): Promise<Array<IAlert & IDevice & IEntry> | null>;
    getByAlertId(id: number): Promise<{alertData: IAlert & IDevice & IEntry, phone: Array<IPhone>, email: Array<IEmail>} | null>;
    updateStatusById(id: number, status: number): Promise<IResponse | Error>;
    deleteById(id: number): Promise<IResponse | Error>;
    updateById(id: number, data: IAlert): Promise<IResponse | Error>;
    add(data: IAlert): Promise<IResponse | Error>;
    getByDeviceId(id: number): Promise<Array<IAlert & IEntry> | null>;
}
