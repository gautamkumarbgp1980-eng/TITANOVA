const levelGrid = document.getElementById("levelGrid");

const levels = [
  {
    level: 1,
    cost: "0.001 BTCB",
    description: "Entry Level"
  },
  {
    level: 2,
    cost: "0.002 BTCB",
    description: "2× Level 1"
  },
  {
    level: 3,
    cost: "0.004 BTCB",
    description: "2× Level 2"
  },
  {
    level: 4,
    cost: "0.008 BTCB",
    description: "2× Level 3"
  },
  {
    level: 5,
    cost: "0.016 BTCB",
    description: "2× Level 4"
  },
  {
    level: 6,
    cost: "0.032 BTCB",
    description: "2× Level 5"
  },
  {
    level: 7,
    cost: "0.064 BTCB",
    description: "2× Level 6"
  },
  {
    level: 8,
    cost: "0.128 BTCB",
    description: "2× Level 7"
  },
  {
    level: 9,
    cost: "0.256 BTCB",
    description: "2× Level 8"
  },
  {
    level: 10,
    cost: "0.512 BTCB",
    description: "2× Level 9"
  },
  {
    level: 11,
    cost: "1.024 BTCB",
    description: "2× Level 10"
  },
  {
    level: 12,
    cost: "2.048 BTCB",
    description: "2× Level 11"
  }
];

if (levelGrid) {
  levelGrid.innerHTML = levels.map(item => `
    <div class="level-card">
      <div class="level-number">${item.level}</div>
      <h3>Level ${item.level}</h3>
      <p class="level-cost">${item.cost}</p>
      <small>${item.description}</small>
    </div>
  `).join("");
}
