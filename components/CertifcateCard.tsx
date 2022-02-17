import { useMediaQuery } from "react-responsive";
import styles from "../styles/Home.module.css";
/**
 * @prop  certificateOrgUrl = certificate org url
 * @prop  certificateOrg = certificate org name
 * @prop  certificateUrl = certificate url
 * @prop  description = certificate description
 * @prop  title = certificate title
 */
export function CertificateCard(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <article
        style={{
          margin: "10px 40px 30px 40px",
          borderRadius: 30,
          width: "80%",
          height: "65%",
          color: "black",
          backgroundColor: "#ededed",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <header style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={props.certificateUrl}
            style={{
              margin: isBigScreen ? "35px 0px 35px 0px" : 0,
              border: "1px solid black",
              width: "98%",
            }}
          />
        </header>
        <main
          style={{
            width: "100%",
            display: "flex",
            padding: "0% 0%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontSize: isBigScreen ? "36px" : "14px",
              textAlign: "center",
              letterSpacing: ".1em",
              margin: "5% 0% 6% 0%",
            }}
          >
            {props.title}
          </h3>
          <div
            style={{
              overflow: "scroll",
              width: "100%",
              height: "75%",
              backgroundColor: "#adadad22",
              borderRadius: 20,
              padding: "10px 0px",
            }}
          >
            <p
              style={{
                margin: 25,
                lineHeight: 1.5,
                fontSize: isBigScreen ? "2em" : "1em",
              }}
            >
              {props.description || "project description"}
            </p>
          </div>
        </main>
        <footer
          style={{
            display: "flex",
            width: "100%",
            height: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ fontSize: isBigScreen ? "2em" : "1em", marginRight: "5%" }}
          >
            🔗
          </div>
          <p
            style={{
              overflowWrap: "break-word",
              fontSize: isBigScreen ? "2em" : "1em",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            <a href={props.certificateOrgUrl} target="_blank" rel="noreferrer">
              {props.certificateOrg || "google"}
            </a>
          </p>
        </footer>
      </article>
    </>
  );
}
