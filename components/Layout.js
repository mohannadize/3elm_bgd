import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>علم بجد</title>
        <base href="./" />
        <link rel="manifest" href="./manifest.json" />
        <link
          rel="icon"
          sizes="192x192"
          href="./imgs/icons/mipmap-xxxhdpi/ic_launcher.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="./imgs/icons/mipmap-xxxhdpi/ic_launcher.png"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="علم بجد - د. اشرف قطب" />
        <meta
          property="og:description"
          content="مجموعة مقالات الدكتور اشرف قطب (علم بجد)"
        />
        <meta property="og:site_name" content="علم بجد - د. اشرف قطب" />
      </Head>
      <div className="section">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
