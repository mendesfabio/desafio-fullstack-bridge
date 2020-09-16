package com.factorial.backend;

import java.math.BigInteger;
import com.google.common.math.BigIntegerMath;

public class Factorial {

  private final int number;
  private final BigInteger factorial;


	public Factorial(int n) {
    this.number = n;
		this.factorial = calcFactorial(n);
	}

	public BigInteger getFactorial() {
		return factorial;
  }

  public BigInteger calcFactorial(int n) {
    return BigIntegerMath.factorial(n);
  }
}