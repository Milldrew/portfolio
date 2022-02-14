import { PageHeader } from "../components/PageHeader";
import { useMediaQuery } from "react-responsive";
import { ContactCard } from "../components/ContactCard";
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
          width: "100%",
          height: "100%",
        }}
      >
        <PageHeader headerText="Contact Drew" />
        <ContactCard />
      </main>
    </>
  );
}
