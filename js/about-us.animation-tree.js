const treeIcon = document.querySelector('.about-us__icon-main');

function swayTree() {
  if (treeIcon) {
    const angle = Math.sin(Date.now() / 300) * 4;
    treeIcon.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(swayTree);
  }
}
swayTree();
