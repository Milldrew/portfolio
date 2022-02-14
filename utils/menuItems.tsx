import { useMediaQuery } from "react-responsive";
import Link from "next/link";
export const MenuItem = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <Link href={props.href}>
      <span
        style={{
          lineHeight: isBigScreen ? 3 : 2,
          display: "inline-block",
          margin: "10px 0px",
          fontSize: isBigScreen ? 30 : 25,
          cursor: "pointer",
          color: "white",
        }}
      >
        {props.text}
      </span>
    </Link>
  );
};
