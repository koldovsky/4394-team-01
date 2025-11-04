/* Kostiantyn Kobel */
// Wait for an element with given id to appear in DOM (subtree) up to timeout ms
function waitForElementById(id, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(id);
    if (existing) return resolve(existing);

    const observer = new MutationObserver(() => {
      const found = document.getElementById(id);
      if (found) {
        observer.disconnect();
        resolve(found);
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error('timeout waiting for element ' + id));
    }, timeout);
  });
}

async function smoothScrollToHashOnLoad() {
  if (!location.hash) return;
  const id = location.hash.slice(1);
  if (!id) return;

  let el;
  try {
    // Wait up to 3s for the element to appear (useful when partials are inserted asynchronously)
    el = await waitForElementById(id, 3000);
  } catch (err) {
    // fallback: try a direct lookup one last time
    el = document.getElementById(id);
    if (!el) return;
  }

  // Ensure any instant browser jump is reset where possible
  try { window.scrollTo(0, 0); } catch (e) {}

  // Small delay to let layout settle (images/fonts/partials)
  await new Promise((r) => setTimeout(r, 30));

  const header = document.querySelector('.global__header');
  const headerHeight = header ? header.offsetHeight : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    smoothScrollToHashOnLoad().catch(() => {});
  });
} else {
  smoothScrollToHashOnLoad().catch(() => {});
}
