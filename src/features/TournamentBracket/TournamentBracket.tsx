import React from "react";
import { TournamentBracketProps } from "./TournamentBracket.model";

const TournamentBracket = ({ title, link }: TournamentBracketProps) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl">{title}</h2>
      <iframe src={`${link}/embed/`} width="100%" height="550"></iframe>
    </div>
  );
};

export default TournamentBracket;
