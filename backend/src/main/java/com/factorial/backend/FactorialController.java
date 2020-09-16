package com.factorial.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class FactorialController {

	@CrossOrigin(origins = "*")
	@GetMapping("/factorial")
	public Factorial factorial(@RequestParam(value = "number") int n) {
		return new Factorial(n);
	}
}