// ボケの発生タイミング
const bokeTimes = [
  8, 26, 38, 42, 45, 50, 65, 72, 80, 91,
  98, 105, 112, 119, 126, 135, 143, 151,
  160, 168, 177, 184, 193, 201, 210, 218,
  226, 235, 243, 252, 260, 269, 278, 286,
  295, 304, 313, 321, 330, 338, 348, 360
];

// ネタの長さ（秒）
const totalTime = 319;

// タイムラインを取得
const timeline = document.getElementById("boke-timeline");

// ボケの位置を表示
if (timeline) {
  bokeTimes.forEach(time => {
    const line = document.createElement("div");

    line.style.position = "absolute";
    line.style.bottom = "0";
    line.style.left = `${(time / totalTime) * 100}%`;
    line.style.width = "5px";
    line.style.height = "45px";
    line.style.background = "#f6d52e";

    timeline.appendChild(line);
  });
}

// 時代別データ
const eras = [
  { name: "創成期", time: 319, boke: 42, tsukkomi: 53 },
  { name: "革命期", time: 301, boke: 24, tsukkomi: 21 },
  { name: "変革期", time: 246, boke: 17, tsukkomi: 28 },
  { name: "現代期", time: 254, boke: 28, tsukkomi: 21 }
];

// 比較グラフ
const chart = document.getElementById("comparison-chart");

if (chart) {
  const metrics = [
    { key: "time", label: "ネタ時間（秒）", max: 350 },
    { key: "boke", label: "ボケの数", max: 60 },
    { key: "tsukkomi", label: "ツッコミの数", max: 60 }
  ];

  metrics.forEach(metric => {
    const group = document.createElement("div");

    group.style.marginBottom = "25px";

    const title = document.createElement("h3");
    title.textContent = metric.label;
    title.style.marginBottom = "10px";
    title.style.color = "#fff";

    group.appendChild(title);

    eras.forEach((era, index) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "10px";
      row.style.marginBottom = "8px";

      const name = document.createElement("span");
      name.textContent = era.name;
      name.style.width = "65px";
      name.style.fontSize = "12px";

      const bar = document.createElement("div");
      const value = document.createElement("span");
      const number = era[metric.key];

      bar.style.width = `${(number / metric.max) * 100}%`;
      bar.style.height = "16px";
      bar.style.borderRadius = "4px";
      bar.style.background =
        index === 1 ? "#f6d52e" : "#999";

      value.textContent = number;
      value.style.fontSize = "13px";

      row.append(name, bar, value);
      group.appendChild(row);
    });

    chart.appendChild(group);
  });
}
