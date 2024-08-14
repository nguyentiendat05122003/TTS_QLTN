import React from "react";
import Header from "../../components/header/Header";

export default function DefaultLayout({ children }) {

  return (
    <>
      <Header />
      {children}
    </>
  );
}
