import React from "react";
import Header from "../../components/header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ padding: '3% 7% ' , backgroundColor : "#F1F1F1"  }}>
        {children}
      </div>
    </>
  );
}
