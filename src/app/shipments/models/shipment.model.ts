import { RefType } from "app/shared/models/ref-type.model";
import { Address } from "app/shared/models/address.model";

export class Shipment {
  id: number;
  createdBy: number;
  created: Date;
  mode: RefType;
  addr1: Address;
  addr2: Address;
  customerRouted: boolean;
  hot: boolean;
  items: Array<string>;
  orderType: string;
  accountName: string;
  weight: number;
  equipmentType: string;
  totalDistanceUom: string;
  status: string;

  constructor(opts:any) {
    this.id = opts.id;
    this.createdBy = opts.createdBy;
    this.created = opts.created;
    this.customerRouted = opts.customerRouted;
    this.hot = opts.hot;
    this.items = opts.items;
    this.orderType = opts.orderType;
    this.accountName = opts.accountName;
    this.weight = opts.weight;
    this.equipmentType = opts.equipmentType;
    this.totalDistanceUom = opts.totalDistanceUom;
    this.status = opts.status;

    if (RefType.isRefType(opts.mode)) {
      this.mode = opts.mode;
    } else {
      this.mode = new RefType();
    }

    if (opts.items instanceof Array) {
      this.items = opts.items;
    }

    if (Address.isAddress(opts.addr1)) {
      this.addr1 = opts.addr1;
    } else {
      this.addr1 = new Address();
      if (opts.originCity) { this.addr1.city = opts.originCity; }
      if (opts.originState) { this.addr1.state = opts.originState; }
    }

    if (Address.isAddress(opts.addr2)) {
      this.addr2 = opts.addr2;
    } else {
      this.addr2 = new Address();
      if (opts.finalCity) { this.addr2.city = opts.finalCity; }
      if (opts.finalState) { this.addr2.state = opts.finalState; }
    }
  }
}