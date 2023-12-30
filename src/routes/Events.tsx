import "../styles/Events.css"
import TitleHero from "../features/TitleHero/TitleHero";

const Events = () => {

  const pageInfo = {
    title: "Events / Initiatives",
    description: `Throughout the year, HackMelbourne offers many opportunities for both
    complete beginners and seasoned veterans to display their teamwork, coding
    and leadership skills.`
  }

  return (
    <div className="w-screen max-w-full">
      <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description} />
    </div>
  );
 };
 
 export default Events;
 