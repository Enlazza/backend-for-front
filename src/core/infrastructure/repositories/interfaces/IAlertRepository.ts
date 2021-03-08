import IAlert from '../../../entities/interfaces/IAlert';
import IDevice from '../../../entities/interfaces/IDevice';
import IEntry from '../../../entities/interfaces/IEntry';
import IResponse from '../../../entities/interfaces/IResponse';

export default interface IAlertRepository {
    getByCompanyId(id: number): Promise<Array<IAlert & IDevice & IEntry> | null>;
    getByAlertId(id: number): Promise<any | null>;
    updateStatusById(id: number, status: number): Promise<IResponse | Error>;
    deleteById(id: number): Promise<IResponse | Error>;
    updateById(id: number, data: IAlert): Promise<IResponse | Error>;
    add(data: IAlert): Promise<IResponse | Error>;
    getByDeviceId(id: number): Promise<Array<IAlert> | null>;
}
