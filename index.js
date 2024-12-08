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

///////////////////////////////////////////////////////////

function login(userName, password) {
    const users = ["john", "alice", "bob"];  // Predefined list of users
    const correctPassword = "Emp@123";  // Correct password for login

    if (users.includes(userName)) {
        if (password === correctPassword) {
            return "Login Successful...";
        } else {
            return "Wrong Password...";
        }
    } else {
        return "User Not Found, Please Signup";
    }
}

module.exports = { signup, login };  // Export both functions
