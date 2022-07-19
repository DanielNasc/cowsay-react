import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { DefaultLayoutStyles } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutStyles>
      <Outlet />
      <Footer />
    </DefaultLayoutStyles>
  );
}
