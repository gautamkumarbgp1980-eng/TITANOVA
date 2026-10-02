const levelGrid = document.getElementById("levelGrid");

const levels = [
  { level: 1, title: "Level 1", text: "Entry Level" },
  { level: 2, title: "Level 2", text: "2× Upgrade" },
  { level: 3, title: "Level 3", text: "3× Upgrade" },
  { level: 4, title: "Level 4", text: "4× Upgrade" },
  { level: 5, title: "Level 5", text: "5× Upgrade" },
  { level: 6, title: "Level 6", text: "6× Upgrade" },
  { level: 7, title: "Level 7", text: "7× Upgrade" },
  { level: 8, title: "Level 8", text: "8× Upgrade" },
  { level: 9, title: "Level 9", text: "9× Upgrade" },
  { level: 10, title: "Level 10", text: "10× Upgrade" },
  { level: 11, title: "Level 11", text: "11× Upgrade" },
  { level: 12, title: "Level 12", text: "Final Level" }
];

if (levelGrid) {
  levelGrid.innerHTML = levels.map(item => `
    <div class="level-card">
      <div class="level-number">${item.level}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join("");
}
