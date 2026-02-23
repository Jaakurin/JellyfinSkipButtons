(function () {

  function dispatchKey(key) {
    const evt = new KeyboardEvent("keydown", {
      key: key,
      code: key,
      bubbles: true,
      cancelable: true
    });

    const target = document.activeElement || document;
    target.dispatchEvent(evt);
  }

  function rewireButtons() {
    const ffBtn = document.querySelector(".btnFastForward");
    const rwBtn = document.querySelector(".btnRewind");

    if (ffBtn && !ffBtn.dataset.skipRewired) {
      ffBtn.dataset.skipRewired = "true";

      // Update tooltip text
      ffBtn.title = "Skip Forward (→)";
      ffBtn.setAttribute("aria-label", "Skip Forward (→)");

      // Override click behavior
      ffBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dispatchKey("ArrowRight");
      }, true);
    }

    if (rwBtn && !rwBtn.dataset.skipRewired) {
      rwBtn.dataset.skipRewired = "true";

      // Update tooltip text
      rwBtn.title = "Skip Back (←)";
      rwBtn.setAttribute("aria-label", "Skip Back (←)");

      // Override click behavior
      rwBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dispatchKey("ArrowLeft");
      }, true);
    }
  }

  const observer = new MutationObserver(function () {
    rewireButtons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  rewireButtons();

})();