const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // compare username and password to a predefined set of login credentials
  if (username === "Abiodun" && password === "test") {
    alert("Login successful!");
    // redirect user to a different page
    window.location.href =
      "https://music.youtube.com/watch?v=A7jefPKT_UU&list=RDAMVMnaUp-yR0QjQ";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
