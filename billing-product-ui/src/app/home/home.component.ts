import {Component, OnInit} from '@angular/core';
import {ItemModel, TableModel} from '../app.model';
import {AppService} from '../app.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableList: TableModel[] = [];
  itemsList: ItemModel[] = [];
  selectedTable: TableModel;
  selectedItem: ItemModel;
  quantity: number;
  error = null;

  hotelNameHeading = 'Prayag Hotel';
  hotelNameSubHeading = 'Family and Garden Resturant';
  hotelBranchName = 'Udgir';
  hotelBranchCode = '1';

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.getItemList();
    this.getTableList();
    this.selectedTable = this.service.initializeTableModel();
    this.selectedItem = this.service.initializeItemModel();
  }

  getTableList() {
    const list = [];
    for (let i = 1; i < 30; i++) {
      const tableModel = this.service.initializeTableModel();
      tableModel.tableNumber = 'C-' + i;
      if (i % 5 === 0) {
        tableModel.isActive = true;
        const tableItemList = [];
        for (let j = 0; j < this.itemsList.length; j++) {
          if (j % 2 === 0) {
            const itemModel: ItemModel = this.itemsList[j];
            itemModel.quantity = j + 1;
            itemModel.total = itemModel.rate * itemModel.quantity;
            tableItemList.push(itemModel);
          }
        }
        tableModel.items = tableItemList;
      }
      list.push(tableModel);
    }
    this.tableList = list;
  }

  getItemList() {
    const list = [];
    for (let i = 1; i < 30; i++) {
      const itemModel = this.service.initializeItemModel();
      itemModel.itemName = 'Panner - ' + i;
      itemModel.rate = i * 5;
      list.push(itemModel);
    }
    this.itemsList = list;
  }

  selectTableOnClick(table) {
    this.selectedTable = table;
    this.calculateGrandTotalBill();
  }

  changeSelectedTableBasedOnDropdownSelect(event) {
    const tableNumber = event.target.value;
    this.selectedTable = this.tableList.find(obj => obj.tableNumber === tableNumber);
    this.calculateGrandTotalBill();
  }

  changeSelectedItem(event) {
    const itemName = event.target.value;
    this.selectedItem = this.itemsList.find(obj => obj.itemName === itemName);
  }

  addItemsToCart() {
    if (this.selectedItem.itemName != null && this.quantity != null && this.quantity > 0 && this.selectedTable.tableNumber != null) {
      this.selectedItem = this.calculateTotalItemPriceBasedOnQuantity(this.selectedItem, this.quantity);
      this.selectedTable.items.push(this.selectedItem);
      this.selectedTable.isActive = true;
      for (let table of this.tableList) {
        if (table.tableNumber === this.selectedTable.tableNumber) {
          table = this.selectedTable;
        }
      }
      this.calculateGrandTotalBill();
      this.setToDefaultValues();
    }
  }

  calculateTotalItemPriceBasedOnQuantity(itemModel: ItemModel, quantity: number): ItemModel {
    itemModel.quantity = quantity;
    itemModel.total = itemModel.rate * itemModel.quantity;
    return itemModel;
  }

  calculateGrandTotalBill() {
    const itemModels = this.selectedTable.items;
    let total = 0;
    let grandTotal = 0;
    let discount = this.selectedTable.discount;
    discount = 100 - discount;
    const gst = this.selectedTable.gst;
    for (const item of itemModels) {
      total = total + item.total;
    }
    this.selectedTable.total = total;
    grandTotal = total;

    if (discount > 0) {
      grandTotal = grandTotal * (discount / 100);
    }
    if (gst > 0) {
      const gstAmount = grandTotal * (gst / 100);
      grandTotal = grandTotal + gstAmount;
    }
    this.selectedTable.grandTotal = Math.round(grandTotal);
  }

  setToDefaultValues() {
    this.selectedItem = this.service.initializeItemModel();
    this.quantity = null;
  }

  printBill() {
    this.closeTable();
  }

  closeTable() {
    for (const table of this.tableList) {
      if (table.tableNumber === this.selectedTable.tableNumber) {
        this.selectedTable = this.service.initializeTableModel();
        table.isActive = false;
        table.items = [];
        table.total = 0;
        table.grandTotal = 0;
      }
    }
  }
}
