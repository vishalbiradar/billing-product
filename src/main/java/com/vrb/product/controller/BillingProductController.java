package com.vrb.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vrb.product.dto.LoginDTO;
import com.vrb.product.models.Hotel;
import com.vrb.product.service.BillingProductService;

@RestController
@RequestMapping("billingProduct")
@CrossOrigin(origins = "http://localhost:4200")
public class BillingProductController {

	@Autowired
	BillingProductService service;

	@GetMapping("/hotelDetails")
	public ResponseEntity<Object> getHotelDetails(@RequestParam Integer hotelId) {
		try {
			Hotel hotelDetails = service.getHotelDetails(hotelId);
			return service.getSuccessResponseByType(hotelDetails, HttpStatus.OK);
		} catch (Exception ex) {
			throw ex;
		}
	}
	
	@PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO) {
		try {
			Hotel hotelDetails = service.login(loginDTO.getUserName(), loginDTO.getPassword());
			if (hotelDetails == null) {
				return service.getSuccessResponseByType("Invalid Credentails", HttpStatus.OK);
			}
			return service.getSuccessResponseByType(hotelDetails, HttpStatus.OK);
		} catch (Exception ex) {
			throw ex;
		}
	}

}
