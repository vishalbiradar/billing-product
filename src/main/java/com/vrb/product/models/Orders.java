package com.vrb.product.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private Integer orderId;

	@Column(name = "bill_total")
	private String billTotal;

	@ManyToOne
	@JoinColumn(name = "table_id")
	private Tables tables;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "order_food_items", joinColumns = { @JoinColumn(name = "order_id") }, inverseJoinColumns = {
			@JoinColumn(name = "food_item_id") })
	private List<FoodItems> locations = new ArrayList<FoodItems>();

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public String getBillTotal() {
		return billTotal;
	}

	public void setBillTotal(String billTotal) {
		this.billTotal = billTotal;
	}

	public Tables getTables() {
		return tables;
	}

	public void setTables(Tables tables) {
		this.tables = tables;
	}

	public List<FoodItems> getLocations() {
		return locations;
	}

	public void setLocations(List<FoodItems> locations) {
		this.locations = locations;
	}

}
