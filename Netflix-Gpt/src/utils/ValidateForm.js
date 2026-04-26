export const validateData = (name, email, password) => {
 const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 const isNameValid = /^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/.test(name);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
 if (!isNameValid) return "Invalid Name";
 if (!isEmailValid) return "Invalid Email";
 if (!isPasswordValid) return "Invalid Password";
 return null;
};
