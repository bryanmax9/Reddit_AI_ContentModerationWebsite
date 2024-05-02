document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("modalBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Optional: Prevent scrolling
    modal.classList.add("modal-open"); // Adds animation class for opening
  };

  span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Optional: Re-enable scrolling
    modal.classList.remove("modal-open"); // Removes animation class when closed
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Optional: Re-enable scrolling
      modal.classList.remove("modal-open"); // Removes animation class when clicked outside
    }
  };
});
