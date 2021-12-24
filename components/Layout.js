import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>علم بجد</title>
      </Head>
      <div className="section">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
