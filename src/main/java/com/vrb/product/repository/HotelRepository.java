package com.vrb.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vrb.product.models.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	Hotel findByHotelId(Integer hotelId);
	
	Hotel findByUserNameAndPassword(String userName, String password);
}
