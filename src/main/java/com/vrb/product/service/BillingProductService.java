package com.vrb.product.service;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vrb.product.models.Hotel;
import com.vrb.product.repository.HotelRepository;

@Service
public class BillingProductService {

	@Autowired
	HotelRepository hotelRepository;

	public List<Hotel> getHotelDetails(Integer hotelId) {
		return hotelRepository.findByHotelId(hotelId);
	}

	public ResponseEntity<Object> getSuccessResponseByType(Object data, HttpStatus type) {
		Map<String, Object> responseMap = new LinkedHashMap<String, Object>();
		responseMap.put("error", "NONE");
		responseMap.put("message", "Success");
		responseMap.put("data", data);
		return new ResponseEntity<Object>(responseMap, type);
	}

}
