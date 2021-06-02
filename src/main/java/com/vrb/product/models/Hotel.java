package com.vrb.product.models;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "hotel")
public class Hotel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hotel_id")
	private Integer hotelId;

	@Column(name = "hotel_name")
	private String hotelName;

	@Column(name = "hotel_description")
	private String hotelDescription;

	@Column(name = "hotel_branch_name")
	private String hotelBranchName;

	@Column(name = "hotel_branch_code")
	private String hotelBranchCode;

	@Column(name = "hotel_address")
	private String hotelAddress;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;

	@Column(name = "discount")
	private Double discount;

	@Column(name = "gst")
	private Double gst;

	@OneToMany(mappedBy = "hotel", orphanRemoval = true)
	private Set<HotelSpeciality> hotelSpeciality = new TreeSet<HotelSpeciality>();

	@OneToMany(mappedBy = "hotel", orphanRemoval = true)
	private Set<Tables> tables = new TreeSet<Tables>();

	public Integer getHotelId() {
		return hotelId;
	}

	public void setHotelId(Integer hotelId) {
		this.hotelId = hotelId;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelDescription() {
		return hotelDescription;
	}

	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}

	public String getHotelBranchName() {
		return hotelBranchName;
	}

	public void setHotelBranchName(String hotelBranchName) {
		this.hotelBranchName = hotelBranchName;
	}

	public String getHotelBranchCode() {
		return hotelBranchCode;
	}

	public void setHotelBranchCode(String hotelBranchCode) {
		this.hotelBranchCode = hotelBranchCode;
	}

	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getGst() {
		return gst;
	}

	public void setGst(Double gst) {
		this.gst = gst;
	}

	public Set<HotelSpeciality> getHotelSpeciality() {
		return hotelSpeciality;
	}

	public void setHotelSpeciality(Set<HotelSpeciality> hotelSpeciality) {
		this.hotelSpeciality = hotelSpeciality;
	}

	public Set<Tables> getTables() {
		return tables;
	}

	public void setTables(Set<Tables> tables) {
		this.tables = tables;
	}

}
