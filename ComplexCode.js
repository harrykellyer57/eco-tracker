/* 
Filename: ComplexCode.js 
Content: A complex JavaScript program demonstrating an advanced algorithm for finding prime numbers.
*/

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  let sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function printPrimes(primes) {
  console.log("Prime Numbers:");
  primes.forEach((prime) => {
    console.log(prime);
  });
}

// Execute the program
let start = 50;
let end = 200;
let primesInRange = findPrimesInRange(start, end);
printPrimes(primesInRange);