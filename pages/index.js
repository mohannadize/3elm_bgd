import React from "react";
import Layout from "@components/Layout";
import useLocalStorage from "@hooks/useLocalStorage";
import articles from "../articles.json";

const md = require("markdown-it")({ html: true });

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page, setPage] = useLocalStorage("current-page", 1);

  const currentArticle = articles[page - 1];

  return (
    <Layout>
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
      <div className="columns">
        <div className="column is-hidden-tablet">
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
        </div>
        <div className="column is-3 is-hidden-mobile">
          <aside className="menu">
            <p className="menu-label">الفهرس</p>
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
          <div className="title is-2">{currentArticle.title}</div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: md.render(currentArticle.content),
            }}
          />
          <nav className="pagination" role="navigation" aria-label="pagination">
            {page > 1 && <a className="pagination-previous" onClick={() => setPage(page => page - 1)}>السابق</a>}
            {articles.length > page && <a className="pagination-next" onClick={() => setPage(page => page + 1)}>التالي</a>}
          </nav>
        </div>
      </div>
    </Layout>
  );
}
