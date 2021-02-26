import IModel from "../../../entities/interfaces/IModel";

export default interface IModelRepository {
  getAll(): Promise<Array<IModel> | null>;
}