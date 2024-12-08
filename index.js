// index.js
function signup(userName) {
    const users = ["User1", "User2", "User3"];  // Predefined list of users
    
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);  // Add the new user to the array
        return "Signup Successful, Please Login";
    }
}

module.exports = { signup };  // Export the signup function

// test

const { signup, login } = require('./index');

console.log(signup("User1"));  // User Already Registered, Please Login
console.log(signup("User2"));  // Signup Successful, Please Login

console.log(login("User2", "Emp@123"));  // Login Successful...
console.log(login("User2", "WrongPassword"));  // Wrong Password...
console.log(login("Random", "Emp@123"));  // User Not Found, Please Signup
