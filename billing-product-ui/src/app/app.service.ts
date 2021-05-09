import {Injectable} from '@angular/core';
import {ItemModel, TableModel} from './app.model';

@Injectable()
export class AppService {

  initializeTableModel(): TableModel {
    return {
      tableNumber: null,
      items: [],
      isActive: null,
      total: 0,
      discount: 0,
      gst: 0,
      grandTotal: 0
    };
  }

  initializeItemModel(): ItemModel {
    return {
      itemName: null,
      quantity: 0,
      rate: 0,
      total: 0
    };
  }
}
