function initScrollIntoCampfire() {
  const campfireButton = document.querySelector(
    "#ourPriceListButton"
  );
  const campfire = document.querySelector("#campfire");

  if (!campfireButton || !campfire) return;

  campfireButton.addEventListener("click", (e) => {
    e.preventDefault();
    campfire.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start"
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollIntoCampfire);
} else {
  initScrollIntoCampfire();
}