const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function runSearch() {
  const query = searchInput.value.trim(); // input sanitation 

  if (!query) { // if search is empty show alert and focus cursor 
    alert("Please enter a name, email, or phone number.");
    searchInput.focus();
    return;
  }

  const params = new URLSearchParams({ q: query });
  window.location.href = "results.php?" + params.toString(); // navigate to results.php page with search as url param
}

searchButton.addEventListener("click", runSearch); // search on button click

searchInput.addEventListener("keydown", (event) => { // search on enter key press
  if (event.key === "Enter") runSearch();
});

if (window.jQuery) {
  $(function () {
    const starsInput = $("#reviewStars");
    const starButtons = $(".star-btn");

    function paintStars(value) {
      starButtons.each(function () {
        const starValue = Number($(this).data("value"));
        const active = starValue <= value;
        $(this).toggleClass("active", active).text(active ? "★" : "☆");
      });
    }

    starButtons.on("click", function () {
      const value = Number($(this).data("value"));
      starsInput.val(value);
      paintStars(value);
    });

    $("#reviewForm").on("submit", function (event) {
      const content = $("#reviewContent").val().trim();
      const stars = Number(starsInput.val());

      if (!content) {
        event.preventDefault();
        alert("Please enter review content.");
        $("#reviewContent").trigger("focus");
        return;
      }

      if (stars < 1 || stars > 5) {
        event.preventDefault();
        alert("Please choose a star rating from 1 to 5.");
      }
    });

    paintStars(Number(starsInput.val()) || 0);
  });
}