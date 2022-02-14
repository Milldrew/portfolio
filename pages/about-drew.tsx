import { PageHeader } from "../components/PageHeader";
import { useMediaQuery } from "react-responsive";
import { AboutMeCard } from "../components/AboutMeCard";
import { ProjectCard } from "../components/ProjectCard";
export default function AboutAndrew(props) {
  const listStyle = { fontSize: 20, marginLeft: 30 };
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <main
        style={{
          marginTop: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
          width: "100vw",
        }}
      >
        <PageHeader headerText="About Drew" />
        <AboutMeCard />
      </main>
    </>
  );
}
