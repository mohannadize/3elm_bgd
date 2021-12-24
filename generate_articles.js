const articlesFolder = './articles/';
const fs = require("fs");

let articles = fs.readdirSync(articlesFolder).filter(file => file.endsWith(".md"));

articles = articles.map((article) => ({
  id: Number(article.split(".md").join('')),
  content: fs.readFileSync(`${articlesFolder}${article}`, "utf8"),
})).sort((a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
});

articles = articles.map(article => ({
  ...article,
  title: `المقال #${article.id}`,
  image: `${articlesFolder}imgs/${article.id}.jpg`,
}))

fs.writeFileSync("./articles.json", JSON.stringify(articles));

// console.log(articles);