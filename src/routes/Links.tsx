import { useState, useEffect } from "react";
import { getLinksPage } from "../services/linksPageServices";

import { LinkItemProps } from "../features/LinkComponents/LinkItemProps";
import LinkTile from "../features/LinkComponents/LinkTile";
import LinkIcon from "../features/LinkComponents/LinkIcon";

import DynamicLink from "../components/DynamicLink/DynamicLink";
import HM_White_Transparent from "/img/HM_White_Transparent.png";
import { CircularProgress } from "@mui/material";

const Links = () => {
  const [links, setLinks] = useState<LinkItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const oldResults = localStorage.getItem("links");
    if (oldResults != null) {
      setLinks(JSON.parse(oldResults).data);
    } else {
      setIsLoading(true);
    }
    getLinksPage().then((result) => {
      setLinks(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="w-screen mx-auto mt-28">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div className="w-inherit flex flex-col gap-8 justify-center items-center">
          <DynamicLink link="/">
            <img title="HackMelbourne Logo" src={HM_White_Transparent} className=" w-20 " />
          </DynamicLink>
          <h1 className=" text-xl font-bold ">@hack.melbourne</h1>

          {links.length > 0 && (
            <div className="flex gap-6 mb-1">
              {links.map((linkItem, index) =>
                linkItem.type === "Icon" ? (
                  <LinkIcon key={index} title={linkItem.title} link={linkItem.link} type={linkItem.type} />
                ) : (
                  <></>
                ),
              )}
            </div>
          )}

          {links.length > 0 && (
            <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-3 px-4 md:px-12">
              <h2 className="text-lg font-semibold mb-1">💻 Check us out!</h2>
              {links.map((linkItem, index) =>
                linkItem.type === "Tile" ? (
                  <LinkTile key={index} title={linkItem.title} link={linkItem.link} type={linkItem.type} />
                ) : (
                  <></>
                ),
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
