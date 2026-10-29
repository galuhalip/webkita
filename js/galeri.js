// ===== FLOATING HEARTS =====
const heartsContainer = document.getElementById("floating-hearts");

const heartSVG = `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
`;

const totalHearts = 20;

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerHTML = heartSVG;

  const randomLeft = Math.random() * 100;
  const randomSize = 16 + Math.random() * 24;
  const randomDelay = Math.random() * 10;
  const randomDuration = 10 + Math.random() * 10;
  const randomOpacity = 0.15 + Math.random() * 0.2;

  heart.style.left = `${randomLeft}%`;
  heart.style.width = `${randomSize}px`;
  heart.style.height = `${randomSize}px`;
  heart.style.animationDelay = `${randomDelay}s`;
  heart.style.animationDuration = `${randomDuration}s`;
  heart.style.setProperty("--heart-opacity", randomOpacity);

  heartsContainer.appendChild(heart);
}
