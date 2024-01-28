import { IconType } from 'react-icons';

interface TeamProps {
    teamName: string;
    description: string;
    bgColor: string;
    borderColor: string;
    members: Member[]
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
            <p className="text-center mb-4">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border rounded-lg text-center min-h-[350px] max-w-[350px]"
                        style={{
                            backgroundColor: bgColor,
                            borderColor: borderColor,
                            flex: '0 0 calc(30% - 20px)'
                            // How to center elements on the last row in CSS Grid?
                            // https://stackoverflow.com/a/46278350/13298307
                        }}
                    >
                        <img src={member.imageUrl} alt={member.name} className="w-full h-auto rounded" />
                        <p className="text-sm">{member.role}</p>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm">{member.about}</p>
                        <div className="flex space-x-2 mt-2">
                            {member.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.url} className="text-blue-500 hover:underline">
                                    <link.icon />
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
