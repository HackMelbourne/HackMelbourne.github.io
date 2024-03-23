import { useEffect, useState } from "react";
import TitleHero from "../../features/TitleHero/TitleHero";
import { getHackiethonBrackets } from "../../services/tournamentServices";
import { TournamentBracketProps } from "../../features/TournamentBracket/TournamentBracket.model";
import TournamentBracket from "../../features/TournamentBracket/TournamentBracket";
import { CircularProgress } from "@mui/material";

const Hackiethon = () => {
  const [brackets, setBrackets] = useState<TournamentBracketProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getHackiethonBrackets().then((result) => {
      setBrackets(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <TitleHero
        pageTitle="Hackiethon"
        pageDescription="The hackiethon tournament bracket. Best of luck to every participant"></TitleHero>
      <div className="max-w-screen-lg mx-auto mt-24 flex flex-col items-center gap-12">
        {isLoading ? (
          <CircularProgress />
        ) : (
          brackets.map((value, key) => {
            return <TournamentBracket title={value.title} link={value.link} key={key}></TournamentBracket>;
          })
        )}
      </div>
    </>
  );
};

export default Hackiethon;
