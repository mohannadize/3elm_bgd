/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Layout from "@components/Layout";
import useLocalStorage from "@hooks/useLocalStorage";
import articles from "../articles.json";
import Image from "next/image";

const md = require("markdown-it")({ html: true });

export default function index() {
  const [page, setPageO] = useLocalStorage("current-page", 1);
  const setPage = (...args) => {
    scroll(0, 0);
    return setPageO(...args);
  };
  const [readArticles, setReadArtcles] = useLocalStorage("read-articles", {});

  const currentArticle = articles[page - 1];

  return (
    <Layout>
      <div className="columns">
        <div className="column is-hidden-tablet">
          <h1 className="title is-1">علم بجد</h1>
          <div className="subtitle">
            <a
              href="https://fb.com/akotbfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              للدكتور/ اشرف قطب
            </a>
          </div>
          <label className="label">اذهب الى</label>
          <div className="select is-fullwidth">
            <select
              value={page}
              onChange={({ currentTarget: { value } }) => setPage(value)}
            >
              {articles.map((article) => (
                <option key={article.id} value={article.id}>
                  {article.title}
                </option>
              ))}
            </select>
          </div>
          <br />
          <br />
        </div>
        <div className="column is-3 is-hidden-mobile">
          <h1 className="title is-1">علم بجد</h1>
          <div className="subtitle">
            <a
              href="https://fb.com/akotbfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              للدكتور/ اشرف قطب
            </a>
          </div>
          <aside className="menu">
            <p className="menu-label">اذهب الى</p>
            <ul className="menu-list">
              {articles.map((article) => (
                <li key={article.id}>
                  <a
                    onClick={() => setPage(article.id)}
                    className={`${article.id == page ? "is-active" : ""}`}
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="column">
          <article>
            <h2 className="title is-2">{currentArticle.title}</h2>
            <div
              className="my-2"
              style={{
                width: 400,
                maxWidth: "80vw",
              }}
            >
              <img src={`/article_images/${currentArticle.id}.jpg`} />
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: md.render(currentArticle.content),
              }}
            />
          </article>
          <nav className="columns is-mobile mt-3">
            {page > 1 && (
              <div className="column">
                <a
                  className="button is-info"
                  onClick={() => setPage((page) => +page - 1)}
                >
                  <strong>السابق</strong>
                </a>
              </div>
            )}
            {articles.length > page && (
              <div className="column has-text-left">
                <a
                  className="button is-success"
                  onClick={() => setPage((page) => +page + 1)}
                >
                  <strong>التالي</strong>
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>
    </Layout>
  );
}
