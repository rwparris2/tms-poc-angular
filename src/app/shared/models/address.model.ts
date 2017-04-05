export class Address {
  public static isAddress(arg: any): boolean {
    return arg && (arg.city !== undefined || arg.state !== undefined || arg.zip !== undefined);
  }

  city: string = null;
  state: string = null;
  zip: string = null;
}