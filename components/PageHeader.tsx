import { useMediaQuery } from "react-responsive";
/**
 * @prop headerText  = text to be display as header
 */
export function PageHeader(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <h1
        style={{
          fontSize: isBigScreen ? "3.4em" : "2em",
          margin: "5% 0 5% 0",
        }}
      >
        {props.headerText}
      </h1>
    </>
  );
}
