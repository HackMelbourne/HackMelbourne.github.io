import "../styles/Events.css"
import TitleHero from "../features/TitleHero/TitleHero";
import EventItem from "../features/EventItem/EventItem";

const Events = () => {

  const pageInfo = {
    title: "Events / Initiatives",
    description: `Throughout the year, HackMelbourne offers many opportunities for both
    complete beginners and seasoned veterans to display their teamwork, coding
    and leadership skills.`
  }
  const eventsData = [
    {
      name: 'Melbourne Hack Event 1',
      date: '5th - 7th of May, 2024',
      brief: '(with workshops from 4th - 5th of May, 2024!)',
      description: 'The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!',
      bgImage: 'https://source.unsplash.com/random?event',
      frontImage: 'https://source.unsplash.com/random?event_',
      link: 'https://www.google.com.au',
    },
    {
      name: 'Melbourne Hack Event 2',
      date: '2024-01-01',
      brief: '(with workshops from 4th - 5th of May, 2024!)',
      description: 'The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!',
      bgImage: 'https://source.unsplash.com/random?event__',
      frontImage: 'https://source.unsplash.com/random?event___',
      link: 'https://www.google.com.au',
    },
    {
      name: 'Melbourne Hack Event 3',
      date: '17th - 20th of Feb, 2024',
      brief: '(with workshops from 17th - 20th of Feb, 2024!)',
      description: `Embark on an exhilarating journey of innovation and discovery at our premier hackathon, uniting students from every corner of the state for an unforgettable weekend of coding, creativity, and collaboration. Scheduled in the vibrant atmosphere of Semester 1, this annual extravaganza is more than just a competition; it's a unique platform to forge connections, exchange ideas, and dive deep into the world of technology.

      As you immerse yourself in this intense hacking marathon, you'll have the rare chance to work alongside some of the brightest minds in the field. It's an opportunity to push boundaries, challenge your limits, and transform your innovative ideas into reality. Engage with industry leaders, gain insights from experts, and expand your network in an environment brimming with enthusiasm and intellectual energy.

      But that's not all - our hackathon is also a battleground for creativity and skill, where you can showcase your technical prowess. With a plethora of amazing prizes waiting to be claimed, it's your chance to shine and get recognized for your talents. Whether you're a seasoned coder or just starting, this event promises to be a thrilling adventure in learning, growth, and fun. Gear up for an experience that will not only test your skills but also inspire you to new heights in the world of technology!`,
      bgImage: 'https://source.unsplash.com/random?event____',
      frontImage: 'https://source.unsplash.com/random?event_____',
      link: 'https://www.google.com.au',
    }
  ];

  return (
    <div className="w-screen max-w-full pt-28">
      <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description} />
      {eventsData.map((event, index) => (
        <EventItem key={index} {...event} />
      ))}
    </div>
  );
 };

 export default Events;
