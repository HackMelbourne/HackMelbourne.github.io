import { useState, useEffect } from "react";
import { getLinksPage } from "../services/linksPageServices";

import { LinkItemProps } from "../features/LinkItem/LinkItemProps";
import LinkItem from "../features/LinkItem/LinkItem";

import DynamicLink from "../components/DynamicLink/DynamicLink";
import HM_White_Transparent from "/img/HM_White_Transparent.png";
import { CircularProgress } from "@mui/material";

const Links = () => {
  const [links, setLinks] = useState<LinkItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Getting previously stored data
    const oldResults = localStorage.getItem("links");

    // If old data exists display that first, else show the loading animation
    if (oldResults != null) {
      setLinks(JSON.parse(oldResults).data);
    } else {
      setIsLoading(true);
    }

    // Query the getLinksPage service
    getLinksPage().then((result) => {
      setLinks(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="w-screen max-w-screen-md px-4 mx-auto mt-28">
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <DynamicLink link="/">
            <img title="HackMelbourne Logo" src={HM_White_Transparent} className=" w-20 " />
          </DynamicLink>
          <h1 className=" text-xl font-bold ">@hack.melbourne</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          renderLinkSection(links)
        )}
      </div>
    </div>
  );
};

const renderLinkSection = (links: LinkItemProps[]) => {
  const linkMap = new Map<string, LinkItemProps[]>();
  linkMap.set("Icon", []);

  links.map((value) => {
    const category = value.category;
    const categoryLinks = linkMap.get(category) || [];
    categoryLinks.push(value);
    linkMap.set(category, categoryLinks);
  });

  console.log(linkMap);

  return (
    <>
      {Array.from(linkMap).map(([key, value]) => {
        if (key === "Icon") {
          return (
            <div key={key} className="flex flex-row items-center gap-6">
              {renderLinkArray(value)}
            </div>
          );
        } else {
          return (
            <div key={key} className="flex flex-col items-center gap-2 w-full mb-2">
              <h2 className=" font-bold text-2xl">{key}</h2>
              <div className="flex flex-col gap-3 items-center w-full">{renderLinkArray(value)}</div>
            </div>
          );
        }
      })}
    </>
  );
};

const renderLinkArray = (links: LinkItemProps[]) => {
  return (
    <>
      {links.map((itemProps) => (
        <LinkItem key={itemProps.link} title={itemProps.title} link={itemProps.link} category={itemProps.category} />
      ))}
    </>
  );
};

export default Links;
