export class RefType {
  public static isRefType(obj) {
    return obj &&
      obj.id !== undefined &&
      obj.name !== undefined;
  }

  id: number = null;
  name: string = null;
}
