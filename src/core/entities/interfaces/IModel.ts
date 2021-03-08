import IPersistentObject from "./IPersistentObject";

export default interface IModel extends IPersistentObject {
  modelName: string;
  imgdir: string;
}