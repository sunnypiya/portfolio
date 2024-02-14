import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-5 my-5">{children}</main>;
};

export default Layout;
