import styles from "../styles/Home.module.css";
/**
 * @prop emoji = project emoji
 * @prop  description = project description
 * @prop  projectTitle = project title
 * @prop  projectUrl = project url
 */
export function ProjectCard(props) {
  return (
    <>
      <article
        style={{
          margin: "10px 40px 30px 40px",
          borderRadius: 30,
          width: "80%",
          height: "65vh",
          color: "black",
          backgroundColor: "#ededed",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <section
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "33.33%",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "4em",
              width: 50,
              height: 50,
            }}
          >
            {props.emoji || "🌲"}
          </div>
        </section>
        <section style={{ width: "66.66%" }}>
          <div
            style={{
              overflow: "scroll",
              width: "100%",
              height: "75%",
              borderBottom: "1px solid black",
            }}
          >
            <h4
              style={{
                textAlign: "center",
                fontWeight: 400,
                letterSpacing: 3,
              }}
            >
              {props.projectTitle || `Project Title`}
            </h4>
            <p
              style={{
                margin: 25,
                lineHeight: 1.5,
                fontSize: "1.5em",
              }}
            >
              {props.description || "project description"}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "25%",
              alignItems: "Center",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ marginLeft: "10%", marginRight: 10 }}>🔗</div>
            <p
              style={{
                margin: 0,
                marginLeft: 8,
                fontSize: ".7em",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              <a href="https://google.com" target="_blank" rel="noreferrer">
                {props.projectUrl || "https://google.com"}
              </a>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
