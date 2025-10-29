function initScrollIntoCampInfrastructure() {
  const scrollButtonIntoCampInfrastructure = document.querySelector(
    "#scrollButtonIntoCampInfrastructure"
  );
  const campInfrastructureView = document.querySelector("#campInfrastructureView");

  if (!scrollButtonIntoCampInfrastructure || !campInfrastructureView) return;

  scrollButtonIntoCampInfrastructure.addEventListener("click", (e) => {
    e.preventDefault();
    campInfrastructureView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollIntoCampInfrastructure);
} else {
  initScrollIntoCampInfrastructure();
}

