package com.vrb.product.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "hotel_speciality")
public class HotelSpeciality {

	@Id
	@GeneratedValue
	@Column(name = "hotel_speciality_id")
	private Integer hotelSpecialityId;

	@Column(name = "hotel_speciality_item_name")
	private String hotelSpecialityItemName;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;

	public Integer getHotelSpecialityId() {
		return hotelSpecialityId;
	}

	public void setHotelSpecialityId(Integer hotelSpecialityId) {
		this.hotelSpecialityId = hotelSpecialityId;
	}

	public String getHotelSpecialityItemName() {
		return hotelSpecialityItemName;
	}

	public void setHotelSpecialityItemName(String hotelSpecialityItemName) {
		this.hotelSpecialityItemName = hotelSpecialityItemName;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

}
