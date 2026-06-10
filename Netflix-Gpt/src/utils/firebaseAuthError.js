export const firebaseAuthError = (error) => {
 switch (error.code) {
  case "auth/network-request-failed":
   return "Network problem. Check your internet connection.";
  case "auth/invalid-credential":
   return "Wrong email or password.";
  case "auth/user-not-found":
   return "No account found with this email.";
  case "auth/wrong-password":
   return "Incorrect password.";
  case "auth/too-many-requests":
   return "Too many attempts. Try again later.";
  default:
   return "Login failed. Please try again.";
 }
};
