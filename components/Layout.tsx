import { useMediaQuery } from "react-responsive";
import { FabDrawer } from "mdrl";
import { MenuItem } from "../utils/menuItems";
export default function Layout() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <FabDrawer
      listStyles={{ paddingRight: "10%", paddingLeft: "10%" }}
      hamburgerProps={{ size: isBigScreen ? 48 : 25 }}
      fabStyles={{
        backgroundColor: "#565656",
        borderRadius: 100,
        padding: isBigScreen ? 20 : 0,
        margin: 30,
      }}
      menuItems={[
        <MenuItem href="/" text="Home" />,
        <MenuItem href="/about-drew" text="About Drew" />,
        <MenuItem href="/projects" text="Projects" />,
        <MenuItem href="/pieces-of-paper" text="Certificates and Such" />,
        <MenuItem href="/contact" text="Contact Me" />,
      ]}
      drawerStyles={{
        paddingTop: "10%",
        overflow: "scroll",
        backgroundColor: "#565656",
        color: "white",
      }}
    />
  );
}
