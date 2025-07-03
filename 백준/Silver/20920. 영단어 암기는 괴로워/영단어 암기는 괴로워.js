const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const vocab = {};

for (const word of input) {
  if (word.length < M) continue;
  else {
    vocab[word] ? vocab[word]++ : (vocab[word] = 1);
  }
}

const vocabKey = Object.keys(vocab);
const vocabSort = vocabKey.sort((a, b) => {
  if (vocab[a] !== vocab[b]) return vocab[b] - vocab[a];
  if (b.length !== a.length) return b.length - a.length;
  return a.localeCompare(b);
});

console.log(vocabSort.join("\n"));
