import IAlert from '../../../entities/interfaces/IAlert';
import IUser from '../../../entities/interfaces/IUser';

export default interface IAlertRepository {
    getByCompanyId(id: number): Promise<Array<IAlert> | null>;
    getByAlertId(id: number): Promise<IAlert | null>;
    updateStatusById(id: number, status: number): Promise<IAlert | Error>;
    deleteById(id: number): Promise<IAlert | Error>;
    updateById(id: number, data: IAlert): Promise<IAlert | Error>;
    add(data: IAlert): Promise<IAlert | Error>;
    getByDeviceId(id: number): Promise<Array<IAlert> | null>;
}
