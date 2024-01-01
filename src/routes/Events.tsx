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
      date: '2024-01-01',
      brief: '(with workshops from 4th - 5th of May, 2023!)',
      description: 'The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!',
      bgImage: 'https://source.unsplash.com/random?event',
      frontImage: 'https://source.unsplash.com/random?event_',
      link: 'https://www.google.com.au',
    },
    {
      name: 'Melbourne Hack Event 2',
      date: '2024-01-01',
      brief: '(with workshops from 4th - 5th of May, 2023!)',
      description: 'The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!',
      bgImage: 'https://source.unsplash.com/random?event__',
      frontImage: 'https://source.unsplash.com/random?event___',
      link: 'https://www.google.com.au',
    },
  ];

  return (
    <div className="w-screen max-w-full pt-28">
      {eventsData.map((event, index) => (
        <EventItem key={index} {...event} />
      ))}
    </div>
  );
 };

 export default Events;
