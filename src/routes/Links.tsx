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
    <div className="mx-auto flex justify-center items-center mt-28 ">
      {isLoading ? (
        <div>
          <CircularProgress color="inherit" />
        </div>
      ): (
        <div className="flex flex-col gap-6 justify-center items-center">
          <DynamicLink link="/">
            <img title="HackMelbourne Logo" src={HM_White_Transparent} className=" w-20 " />
          </DynamicLink>
          <h1 className=" text-xl font-semibold ">@hack.melbourne</h1>
          
          <div>
            {links.map((linkItem, index) => (
              linkItem.type == 'Icon' ? (
                <LinkIcon 
                  key={index}
                  title={linkItem.title}
                  link={linkItem.link}
                  type={linkItem.type}
                />
              ) : (
                <><p>HEYY</p></>
              )   
            ))}
          </div>

          <div>
          {links.map((linkItem, index) => (
            linkItem.type == 'Tile' ? (
              <LinkTile 
                key={index}
                title={linkItem.title}
                link={linkItem.link}
                type={linkItem.type}
              />
            ) : (
              <><DynamicLink link="#">
              <img title="HackMelbourne Logo" src={HM_White_Transparent} className=" w-20 " />
            </DynamicLink></>
            )   
          ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default Links;