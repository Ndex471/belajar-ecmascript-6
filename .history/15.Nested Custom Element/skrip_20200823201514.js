import "./article-list.js.js";
import articles from "./articles.js.js";

const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;

document.body.appendChild(articleListElement);