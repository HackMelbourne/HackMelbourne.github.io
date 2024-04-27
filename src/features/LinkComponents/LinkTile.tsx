import { LinkItemProps } from "./LinkItemProps";

const LinkTile = ({ title, link } : LinkItemProps) => {
  return (
    <>
      <p>TILLEEE</p>
      <p>{title}</p>
      <p>{link}</p>
    </>
  )
}

export default LinkTile;