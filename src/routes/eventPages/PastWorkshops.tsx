import WorkshopDisplay from "../../features/WorkshopLinks/WorkshopLinks"

import { useEffect, useState } from "react";
import { getWorkshopLinks } from "../../services/workshopLinkServices";
import { WorkshopLinkProps } from "../../features/WorkshopLinks/WorkshopLinks.model"
import { CircularProgress } from "@mui/material";
import TitleHero from "../../features/TitleHero/TitleHero";

const PastWorkshops = () => {
  const [workshopLinks, setWorkshopLinks] = useState<WorkshopLinkProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getWorkshopLinks().then((result) => {
      setWorkshopLinks(result)
      console.log("workshop links result:");
      console.log(result);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <TitleHero pageTitle="Past Workshops" pageDescription="Check out our very own collection of workshops hosted by HackMelbourne!" />
      {isLoading ? (
        <div className="col-span-1 mt-8 flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="mt-8 flex justify-center">
            <div className="md:w-1/3">
                <WorkshopDisplay workshopLinks={workshopLinks}/>
            </div>
        </div>
      )}
    </>
  );
};

export default PastWorkshops;
