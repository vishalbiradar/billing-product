package com.vrb.product.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "food_items")
public class FoodItems {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "food_item_id")
	private Integer foodItemId;

	@Column(name = "food_item_name")
	private String foodItemName;

	@Column(name = "food_item_rate")
	private Double foodItemRate;

	public Integer getFoodItemId() {
		return foodItemId;
	}

	public void setFoodItemId(Integer foodItemId) {
		this.foodItemId = foodItemId;
	}

	public String getFoodItemName() {
		return foodItemName;
	}

	public void setFoodItemName(String foodItemName) {
		this.foodItemName = foodItemName;
	}

	public Double getFoodItemRate() {
		return foodItemRate;
	}

	public void setFoodItemRate(Double foodItemRate) {
		this.foodItemRate = foodItemRate;
	}

}
