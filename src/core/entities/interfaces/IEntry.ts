import IPersistentObject from "./IPersistentObject";

export default interface IEntry extends IPersistentObject {
  deviceId: number;
  entry: string;
  entryName: string;
}