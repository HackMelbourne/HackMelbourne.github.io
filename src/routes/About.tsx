import TeamComponent from '../features/TeamComponent/TeamComponent';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const teamsData = [
    {
      teamName: 'Executive Team',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
      bgColor: 'rgba(231,52,41,0.05)',
      borderColor: 'rgba(231,52,41,.5)',
      members: [
        {
          name: 'Daniel Park',
          role: 'President',
          about: `I'm a little strong and can copy a lot of peoples movements.`,
          imageUrl: 'https://via.placeholder.com/150',
          links: [
            { url: 'https://www.linkedin.com/in/Daniel', icon: FaLinkedin },
            { url: 'https://twitter.com/Daniel', icon: FaTwitter },
          ],
        },
        {
          name: 'Jane Smith',
          role: 'Vice President',
          about: 'Innovating and inspiring our teams.',
          imageUrl: 'https://via.placeholder.com/150',
          links: [
            { url: 'https://www.facebook.com/janesmith', icon: FaFacebook },
            { url: 'https://www.instagram.com/janesmith', icon: FaInstagram },
          ],
        },
      ],
    },];


  return (
    <div>
      <section className="z-10 relative">
        {teamsData.map((team, index) => (
          <TeamComponent key={index} {...team} />
        ))}
      </section>
    </div>
  );
};

export default About;
