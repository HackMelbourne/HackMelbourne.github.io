import { useState, useEffect } from "react";
import { getLinksPage } from "../services/linksPageServices";
import { LinkItemProps } from "../features/LinkComponents/LinkItemProps";
import LinkTile from "../features/LinkComponents/LinkTile";
import LinkIcon from "../features/LinkComponents/LinkIcon";
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

  return (
    <div>
      {isLoading ? (
        <div className="mt-8 flex justify-center items-center">
          <CircularProgress />
        </div>
      ): (
        <div>
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
                <></>
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
              <></>
            )   
          ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default Links;