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

