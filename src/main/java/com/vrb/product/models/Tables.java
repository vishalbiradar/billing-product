package com.vrb.product.models;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tables")
public class Tables {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "table_id")
	private Integer tableId;

	@Column(name = "table_number")
	private String tableNumber;

	@Column(name = "is_table_active", nullable = false, columnDefinition = "boolean default false")
	private Boolean isTableActive;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;
	
	@OneToMany(mappedBy = "tables", orphanRemoval = true)
	private Set<Orders> orders = new TreeSet<Orders>();

	public Integer getTableId() {
		return tableId;
	}

	public void setTableId(Integer tableId) {
		this.tableId = tableId;
	}

	public String getTableNumber() {
		return tableNumber;
	}

	public void setTableNumber(String tableNumber) {
		this.tableNumber = tableNumber;
	}

	public Boolean getIsTableActive() {
		return isTableActive;
	}

	public void setIsTableActive(Boolean isTableActive) {
		this.isTableActive = isTableActive;
	}

	public Set<Orders> getOrders() {
		return orders;
	}

	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

}
