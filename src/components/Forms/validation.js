export function validateForm(userData) {
  const errors = {};

  // Validate email
  if (!userData.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Invalid email address.";
  } else if (userData.email.length > 35) {
    errors.email = "Email address is too long.";
  }

  // Validate password
  if (!userData.password) {
    errors.password = "Password is required.";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "Password must contain at least one number.";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password length must be between 6 and 10 characters.";
  }

  return errors;
}