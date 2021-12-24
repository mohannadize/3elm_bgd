import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>علم بجد</title>
        <base href="./" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <div className="section">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
