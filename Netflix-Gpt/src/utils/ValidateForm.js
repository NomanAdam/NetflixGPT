export const validateData = (name, email, password, isSignin) => {
 const errors = {};

 if (!isSignin) {
  if (!/^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/.test(name)) {
   errors.name = "Name: letters only (John Doe)";
  }
 }

 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  errors.email = "Email: example@gmail.com";
 }

 if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
  errors.password = "Password: 8+ chars, 1 upper, 1 lower, 1 number";
 }

 return Object.keys(errors).length ? errors : null;
};
