//Popover
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Gender selection
//console.log("Current pathname:", window.location.pathname); // Debugging statement

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  //console.log("Inside if condition"); // Debugging statement

  const radioBtn1 = document.querySelector("#flexRadioDefault1");
  const radioBtn2 = document.querySelector("#flexRadioDefault2");
  const radioBtn3 = document.querySelector("#flexRadioDefault3");
  const genderSelect = document.querySelector("#genderSelect");

  //console.log(genderSelect); // Debugging statement

  radioBtn1.addEventListener("change", () => {
    //console.log("Radio button 1 selected"); // Debugging statement
    genderSelect.classList.add("d-none");
  });

  radioBtn2.addEventListener("change", () => {
    //console.log("Radio button 2 selected"); // Debugging statement
    genderSelect.classList.add("d-none");
  });

  radioBtn3.addEventListener("change", () => {
    //console.log("Radio button 3 selected"); // Debugging statement
    genderSelect.classList.remove("d-none");
  });
} else {
  //console.log("Not on homepage"); // Debugging statement
}
