// function initScrollIntoCustomerReviews() {
//   const customerReviewsButton = document.querySelector(
//     "#customerReviewsButton"
//   );
//   const customerReviewsView = document.querySelector("#customerReviewsView");

//   if (!customerReviewsButton || !customerReviewsView) return;

//   customerReviewsButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     customerReviewsView.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//       inline: "start"
//     });
//   });
// }

// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", initScrollIntoCustomerReviews);
// } else {
//   initScrollIntoCustomerReviews();
// }