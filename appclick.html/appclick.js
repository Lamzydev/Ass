const input = document.querySelector("#user");
const password = document.querySelector("#pass");
const button = document.querySelector(".sign-btn");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const userValue = input.value;
  const passValue = password.value;
  console.log(userValue, passValue);
  if (userValue!== "appclick" || passValue!== "appclick123") {
    alert("Please enter a valid credential");
  }
});
 