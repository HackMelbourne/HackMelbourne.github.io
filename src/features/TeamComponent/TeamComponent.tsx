import { IconType } from 'react-icons';

interface TeamProps {
  teamName: string;
  description: string;
  bgColor: string;
  borderColor: string;
  members: Member[];
}

interface Member {
  name: string;
  role: string;
  about: string;
  imageUrl: string;
  links: Link[];
}

interface Link {
  url: string;
  icon: IconType;
}

const TeamComponent = ({ teamName, description, bgColor, borderColor, members }: TeamProps) => {
  return (
    <div className="mx-auto max-w-[800px] w-[80%] my-20 min-h-[200px] align-center justify-center m-20">
      <h2 className="text-4xl font-bold mb-2 text-center">Meet the {teamName}</h2>
      <p className="text-center mb-4 max-w-md mx-auto">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex flex-wrap justify-center gap-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg text-center min-h-[350px]"
            style={{
              backgroundColor: bgColor,
              borderColor: borderColor,
              flex: '0 0 calc(30% - 20px)',
              // How to center elements on the last row in CSS Grid?
              // https://stackoverflow.com/a/46278350/13298307
            }}>
            <div
              className="top-0 left-0 w-32 h-32 rounded-[100rem] bg-cover bg-center m-4"
              style={{ backgroundImage: `url(${member.imageUrl})` }}></div>
            <p className="text-sm">{member.role}</p>
            <h3 className="text-xl-lg md:text-sm font-semibold m-1">{member.name}</h3>
            <p className="text-sm mb-auto m-2">{member.about}</p>
            <div className="flex space-x-2 mt-2">
              {member.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon p-3 text-neutral-100 hover:underline">
                  <link.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
