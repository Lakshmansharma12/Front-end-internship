document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => error.style.display = 'none');
  
    let isValid = true;
  
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
      document.getElementById('nameError').textContent = "Name must be at least 3 characters long.";
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }
  
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = "Please enter a valid email.";
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
      document.getElementById('phoneError').textContent = "Phone must be a 10-digit number.";
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
  
