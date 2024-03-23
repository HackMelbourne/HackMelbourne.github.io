import { useEffect, useState } from "react";
import TitleHero from "../../features/TitleHero/TitleHero";
import { getHackiethonBrackets } from "../../services/tournamentServices";
import { TournamentBracketProps } from "../../features/TournamentBracket/TournamentBracket.model";
import TournamentBracket from "../../features/TournamentBracket/TournamentBracket";

const Hackiethon = () => {
  const [brackets, setBrackets] = useState<TournamentBracketProps[]>([]);

  useEffect(() => {
    getHackiethonBrackets().then((result) => {
      setBrackets(result);
      console.log(brackets);
    });
  }, []);

  return (
    <>
      <TitleHero
        pageTitle="Hackiethon"
        pageDescription="The hackiethon tournament bracket. Best of luck to every participant"></TitleHero>
      <div className="max-w-screen-lg mx-auto mt-24">
        {brackets.map((value, key) => {
          return <TournamentBracket title={value.title} link={value.link} key={key}></TournamentBracket>;
        })}
      </div>
    </>
  );
};

export default Hackiethon;
