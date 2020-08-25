import "./article-item.js";
import article from "./article.js";

const containerElement = document.querySelector(".container");

const articleItemElement = document.createElement("article-item");
articleItemElement.article = article;
/**
 * Dengan begitu tentu kita hanya bisa menetapkan data pada custom element
melalui sintaks JavaScript dengan mengakses properti .article
 */

containerElement.appendChild(articleItemElement);