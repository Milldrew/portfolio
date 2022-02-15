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
        <MenuItem key={1} href="/" text="Home" />,
        <MenuItem key={2} href="/about-drew" text="About Drew" />,
        <MenuItem key={3} href="/projects" text="Projects" />,
        <MenuItem
          key={4}
          href="/pieces-of-paper"
          text="Certificates and Such"
        />,
        <MenuItem key={5} href="/contact" text="Contact Me" />,
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
