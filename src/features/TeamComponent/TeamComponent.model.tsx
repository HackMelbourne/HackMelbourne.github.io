import { IconType } from 'react-icons';

export interface TeamProps {
    teamName: string;
    description: string;
    bgColor: string;
    borderColor: string;
    members: Member[];
}
  
export interface Link {
    url: string;
    icon: IconType;
}
  
export interface Member {
    name: string;
    role: string;
    about: string;
    imageUrl: string;
    links: Link[];
    teamName: string;
    socialLinks: string[];
}