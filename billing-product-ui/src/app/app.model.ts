export class ItemModel {
  itemName: string;
  rate: number;
  quantity: number;
  total: number;
}

export class TableModel {
  tableNumber: string;
  items: ItemModel[];
  isActive: boolean;
  total: number;
  discount: number;
  gst: number;
  grandTotal: number;
}


