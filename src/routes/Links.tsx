import { useState, useEffect } from "react";
import { getLinksPage } from "../services/linksPageServices";

import { LinkItemProps } from "../features/LinkComponents/LinkItemProps";
import LinkTile from "../features/LinkComponents/LinkTile";
import LinkIcon from "../features/LinkComponents/LinkIcon";

import DynamicLink from "../components/DynamicLink/DynamicLink";
import HM_White_Transparent from '/img/HM_White_Transparent.png';
import { CircularProgress } from "@mui/material";

const Links = () => {
  const [links, setLinks] = useState<LinkItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
     
  useEffect(() => {
    setIsLoading(true);
    getLinksPage().then((result) => {
      setLinks(result);
      setIsLoading(false);
    });
  }, []); 

  for (let i=0; i<links.length; i++) {
    console.log(links[i].type)
  }

  return (
    <div className="w-screen mx-auto mt-28">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      ): (
        <div className="w-inherit flex flex-col gap-8 justify-center items-center">
          <DynamicLink link="/">
            <img title="HackMelbourne Logo" src={HM_White_Transparent} className=" w-20 " />
          </DynamicLink>
          <h1 className=" text-xl font-bold ">@hack.melbourne</h1>
          
          {Array.isArray(links) && links.length > 0 && (
            <div className="flex gap-4 mb-1">
              {links.map((linkItem, index) => (
                linkItem.type === 'Icon' ? (
                  <LinkIcon 
                    key={index}
                    title={linkItem.title}
                    link={linkItem.link}
                    type={linkItem.type}
                  />
                ) : (
                  <></>
                )   
              ))}
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="w-screen flex flex-col justify-center items-center gap-3">
              <h2 className="text-lg font-semibold mb-1">💻 Check us out!</h2>
              {links.map((linkItem, index) => (
                linkItem.type === 'Tile' ? (
                  <LinkTile 
                    key={index}
                    title={linkItem.title}
                    link={linkItem.link}
                    type={linkItem.type}
                  />
                ) : (
                  <></>
                )   
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  )
}

export default Links;