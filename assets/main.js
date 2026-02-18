(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var copyWalletButton = document.querySelector("[data-copy-wallet]");
  if (!copyWalletButton) return;

  copyWalletButton.addEventListener("click", async function () {
    var wallet = copyWalletButton.getAttribute("data-wallet") || "";
    if (!wallet) return;

    var copied = false;
    try {
      await navigator.clipboard.writeText(wallet);
      copied = true;
    } catch (e) {
      var helper = document.createElement("textarea");
      helper.value = wallet;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      copied = document.execCommand("copy");
      document.body.removeChild(helper);
    }

    if (copied) {
      var initialText = copyWalletButton.textContent;
      copyWalletButton.textContent = "Copied";
      setTimeout(function () {
        copyWalletButton.textContent = initialText;
      }, 1400);
    }
  });
})();
