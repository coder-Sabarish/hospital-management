function Validate(event) {
  const {
    name,
    mobile_numer,
    aadhar_number,
    password,
    Name,
    gender,
    insurance,
    email,
  } = event.target;
  if (name.value.length < 4) {
    alert("length of name must be greater than 3.");
    return false;
  }
  if (mobile_numer.value.length !== 10) {
    alert("Mobile number must be a 10 digit number.");
    return false;
  }
  if (aadhar_number.value.length !== 12) {
    alert("Aadhar should be a valid 12 digit number.");
    return false;
  }
  if (password.value.length < 8) {
    alert("Define a password of length greater than 8");
    return false;
  }
  if (password.value !== Name.value) {
    alert(
      "Make sure that the password and the confirm password are both equal"
    );
    return false;
  }
  if (insurance.value === undefined) {
    alert("select yes if you have an insurance or no otherwise");
    return false;
  }
  if (gender.value === undefined) {
    alert("Select your gender");
    return false;
  }
  if (email.value === "") {
    alert("Enter an valid email");
    return false;
  }
  return true;
}
export default Validate;
