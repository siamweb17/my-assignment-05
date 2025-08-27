let heartCount = 0;
let copyCount = 0;


document.addEventListener("DOMContentLoaded", () => {
  // Element references
  const heartCountEl = document.getElementById("heartCount");
  const copyCountEl = document.getElementById("copyCount");
  const coinElement = document.getElementById("coinCount") || document.getElementById("coin");
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

  // Coin initial value
  let coin = parseInt(coinElement.textContent) || 100;

  // ---------------- Heart Button ----------------
  document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener("click", () => {
      heartCount++;
      heartCountEl.innerText = heartCount;
    });
  });

  // ---------------- Copy Button ----------------
  document.querySelectorAll(".copy").forEach(copyBtn => {
    copyBtn.addEventListener("click", (e) => {
      const number = e.target.closest(".card").querySelector(".number").innerText;
      navigator.clipboard.writeText(number);
      copyCount++;
      copyCountEl.innerText = copyCount;
      alert(`Copied: ${number}`);
    });
  });

  // ---------------- Call Button ----------------
  document.querySelectorAll(".card .call").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const name = card.querySelector("h3")?.textContent?.trim() || "Unknown";
      const number = card.querySelector(".number")?.textContent?.trim() || "";

      // Coin check
      if (coin >= 20) {
        coin -= 20;
        coinElement.textContent = coin;

        // Alert call
        alert(`📞 Calling ${name} (${number})...`);

        // Add to history
        addToHistory(name, number);
      } else {
        alert("❌ Not enough coins! Need at least 20.");
      }
    });
  });

  // ---------------- Add to History ----------------
  function addToHistory(name, number) {
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();

    li.innerHTML = `
      <div class="history-left">
        <span>${name}</span>
        <span>(${number})</span>
      </div>
      <div class="history-right">${time}</div>
    `;
    historyList.prepend(li);
  }

  // ---------------- Clear History ----------------
  clearBtn?.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
});



function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}
