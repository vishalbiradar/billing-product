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

export class HotelModel {
  hotelId: number;
  discount: number;
  gst: number;
  hotelAddress: string;
  hotelBranchCode: number;
  hotelBranchName: string;
  hotelDescription: string;
  hotelName: string;
  hotelSpeciality: any[];
}

