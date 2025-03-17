const fs = require("fs");
const path = require("path");
const difficultyOrder = ["Easy", "Medium", "Hard"];

function getProblems(rootDir) {
  const problems = {};

  for (const difficulty of difficultyOrder) {
    const dirPath = path.join(rootDir, "LeetCode", difficulty);
    if (fs.existsSync(dirPath)) {
      problems[difficulty] = fs
        .readdirSync(dirPath)
        .filter((folder) =>
          fs.lstatSync(path.join(dirPath, folder)).isDirectory()
        )
        .map((folder) => {
          const match = folder.match(/(\d+)-(.+)/);
          return match
            ? {
                number: match[1],
                title: match[2].replace(/-/g, " "),
                link: `./${difficulty}/${folder}`,
              }
            : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.number - b.number);
    } else {
      problems[difficulty] = [];
    }
  }
  return problems;
}

function updateReadme(problems, outputPath = "LeetCode/README.md") {
  let total = 0;
  const summaryTable = [
    "| Difficulty | Solved Count |",
    "|--------|------------|",
  ];

  for (const difficulty of difficultyOrder) {
    const count = problems[difficulty].length;
    total += count;
    summaryTable.push(`| ${difficulty} | ${count} |`);
  }
  summaryTable.push(`| **Total Solved** | **${total}** |`);

  let content = "# 📌 LeetCode 문제 정리\n\n";
  content += "## 🎯 난이도별 풀이 현황\n\n";
  content += summaryTable.join("\n");
  content += "\n\n---\n\n";

  for (const difficulty of difficultyOrder) {
    content += `## ✅ ${difficulty}\n`;
    content += "| 번호 | 제목 |\n";
    content += "|------|------|\n";

    problems[difficulty].forEach(({ number, title, link }) => {
      content += `| ${number} | [${title}](${link}) |\n`;
    });

    content += "\n";
  }

  fs.writeFileSync(outputPath, content, "utf-8");
  console.log("LeetCode README.md 업데이트 완료");
}

const problems = getProblems("./");
updateReadme(problems);
