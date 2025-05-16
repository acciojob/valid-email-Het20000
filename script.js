  // Get the current URL
  var currentURL = window.location.href;

  // Get the length of the URL
  var urlLength = currentURL.length;

  // Display the length of the URL using alert()
  alert("The length of the URL is: " + urlLength);

function validEmail(str) {
  // Regular expression for validating an email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the input string is a valid email address
  return emailRegex.test(str);
}

// Test cases
console.log(validEmail('abc@example.com')); // returns true
console.log(validEmail('xyz@abc.com.in')); // returns true
console.log(validEmail('john.doe@com.')); // returns false
console.log(validEmail('@example.com')); // returns false
console.log(validEmail('')); // returns false
console.log(validEmail('invalid-email')); // returns false
console.log(validEmail('test@test.co.uk'));  // Returns true
console.log(validEmail('test.test@test.com')); // Returns true
console.log(validEmail('test-test@test.com')); // Returns true
console.log(validEmail('test@test')); // Returns false
