package com.vrb.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vrb.product.models.Hotel;
import com.vrb.product.service.BillingProductService;

@RestController
public class BillingProductController {

	@Autowired
	BillingProductService service;

	@GetMapping("billingProduct/hotelDetails")
	public ResponseEntity<Object> getHotelDetails(@RequestParam Integer hotelId) {
		try {
		List<Hotel> hotelDetails = service.getHotelDetails(hotelId);
		return service.getSuccessResponseByType(hotelDetails, HttpStatus.OK);
		} catch (Exception ex) {
			throw ex;
		}
	}

}
