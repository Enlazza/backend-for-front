import IAlert from '../../../entities/interfaces/IAlert';
import IUser from '../../../entities/interfaces/IUser';

export default interface IAlertRepository {
    // getAll(): Promise<Array<IAlert> | null>;
    // getById(id: number): Promise<IAlert | null>;
    // getByMac(mac: string): Promise<IAlert | null>;
    // create(device: IAlert): Promise<IAlert | Error>;
    getByUserId(id: number): Promise<Array<IAlert> | null>;
    getByAlertId(id: number): Promise<IAlert | null>;
    updateStatusById(id: number, status: number): Promise<IAlert | Error>;
    deleteById(id: number): Promise<IAlert | Error>;
}
