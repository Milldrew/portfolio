import { FabDrawer } from "mdrl";
import { MenuItem } from "../utils/menuItems";
export default function Layout() {
  return (
    <FabDrawer
      listStyles={{ paddingRight: "10%", paddingLeft: "10%" }}
      hamburgerProps={{ size: 25 }}
      fabStyles={{
        backgroundColor: "#565656",
        borderRadius: 100,
        padding: 0,
        margin: 30,
      }}
      menuItems={[
        <MenuItem href="/" text="Home" />,
        <MenuItem href="/about-andrew" text="About Andrew" />,
        <MenuItem href="/projects" text="Projects" />,
        <MenuItem href="/pieces-of-paper" text="Certifications" />,
      ]}
      drawerStyles={{
        paddingTop: "20%",
        backgroundColor: "#565656",
        color: "white",
      }}
    />
  );
}
