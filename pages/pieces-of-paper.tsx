import { PageHeader } from "../components/PageHeader";
import { CertificateCard } from "../components/CertifcateCard";
import { ProjectCard } from "../components/ProjectCard";
export default function AboutAndrew(props) {
  const listStyle = { fontSize: 20, marginLeft: 30 };
  return (
    <>
      <header style={{ display: "flex", justifyContent: "Center" }}>
        <PageHeader headerText="Certificates and Such" />
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <CertificateCard
          title="Bachelors of Science Chemistry Biochemistry"
          certificateUrl="bs-chem.jpg"
          certificateOrgUrl="https://www.uaf.edu/chem"
        />
        <CertificateCard
          title="OpenJS Service Developer Certification"
          certificateUrl="jsnad.jpg"
          certificateOrgUrl="https://www.uaf.edu/chem"
        />

        <CertificateCard
          title="OpenJS Service Developer Certification"
          certificateUrl="jsnsd.jpg"
          certificateOrgUrl="https://www.uaf.edu/chem"
        />
      </main>
    </>
  );
}
