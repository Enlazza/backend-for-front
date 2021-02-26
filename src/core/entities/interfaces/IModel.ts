import IPersistentObject from "./IPersistentObject";

export default interface IModel extends IPersistentObject {
  name: string;
}