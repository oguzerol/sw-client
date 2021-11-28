import React, { ReactNode } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";

const App = ({ children }: { children: ReactNode }) => (
  <div className={"App"}>
    <Navbar color={"dark"} dark>
      <NavbarBrand href={"/"}>{"Star Wars Client"}</NavbarBrand>
    </Navbar>

    <Container className={"pt-5"}>{children}</Container>
  </div>
);

export default App;
