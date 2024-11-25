document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.classList.add("scale-105");
  });
  button.addEventListener("mouseout", () => {
    button.classList.remove("scale-105");
  });
});

document.getElementById('callButton').addEventListener('click', function () {
  const phoneNumber = "+917014930330"; // Replace with the desired phone number
  window.location.href = `tel:${phoneNumber}`;
});
