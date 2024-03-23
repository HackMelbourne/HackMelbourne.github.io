import TitleHero from "../../features/TitleHero/TitleHero";

const Hackiethon = () => {
  return (
    <>
      <TitleHero
        pageTitle="Hackiethon"
        pageDescription="The hackiethon tournament bracket. Best of luck to every participant"></TitleHero>
      <div className="max-w-screen-lg mx-auto mt-24">
        <h2 className="font-bold text-2xl">Semi Finals Tournament</h2>
        <iframe src="https://brackethq.com/b/8bczb/embed/" width="100%" height="550"></iframe>
      </div>
    </>
  );
};

export default Hackiethon;
