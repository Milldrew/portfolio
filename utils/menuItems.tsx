import Link from "next/link";
export const MenuItem = (props) => {
  return (
    <Link href={props.href}>
      <span style={{ fontSize: 25, cursor: "pointer", color: "white" }}>
        {props.text}
      </span>
    </Link>
  );
};
