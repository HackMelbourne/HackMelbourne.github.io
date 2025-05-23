import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/Layout";

// Main Pages
import Root from "./routes/Root";
import OurMission from "./routes/OurMission";
import Events from "./routes/Events";
import MeetTheTeam from "./routes/MeetTheTeam";
import Calendar from "./routes/Calendar";
import Sponsors from "./routes/Sponsors";
import HallOfFame from "./routes/HallOfFame";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";

// Event Pages
import OWeek from "./routes/eventPages/OWeek";
import OWeekGame from "./routes/eventPages/OWeekGame";
import GameComplete from "./routes/eventPages/GameComplete";
import HackiethonQuiz from "./routes/eventPages/HackiethonQuiz";
import QuizResults from "./features/HackiethonQuiz/QuizResults";

// Blog Pages
import Blogs from "./routes/Blogs";
import { BlogInterface, BlogsData } from "./routes/blogs/BlogsData";

// Google Analytics
import ReactGA from "react-ga4";
import Hackiethon from "./routes/eventPages/Hackiethon";
import Links from "./routes/Links";

ReactGA.initialize("G-BCJY191MCE");

// Interface for the props that the Redirect component will receive
interface RedirectProps {
  to: string;
}

// Redirect component using the React.FC type
const Redirect: React.FC<RedirectProps> = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="about" element={<OurMission />} />
      <Route path="about/events" element={<Events />} />
      <Route path="about/meettheteam" element={<MeetTheTeam />} />
      <Route path="upcoming" element={<Navigate to="./calendar" replace />} />
      <Route path="upcoming/calendar" element={<Calendar />} />
      <Route path="upcoming/links" element={<Links />}></Route>
      <Route path="links" element={<Links />}></Route>
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="past" element={<Navigate to="./halloffame" replace />} />
      <Route path="past/halloffame" element={<HallOfFame />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="O-Week" element={<OWeek />}></Route>
      <Route path="O-Week/playGame" element={<OWeekGame></OWeekGame>}></Route>
      <Route path="O-Week/complete" element={<GameComplete></GameComplete>}></Route>
      <Route path="Hackiethon" element={<Hackiethon></Hackiethon>}></Route>
      <Route path="Hackiethon/quiz" element={<HackiethonQuiz></HackiethonQuiz>}></Route>
      <Route path="Hackiethon/quiz/results" element={<QuizResults></QuizResults>}></Route>
      <Route path="blogs" element={<Blogs></Blogs>}></Route>
      {BlogsData.map((blog: BlogInterface) => (
        <Route key={blog.title} path={`blogs/${blog.url}`} element={<Blogs blogId={blog.articleId} />} />
      ))}
      {/* Redirects */}
      <Route path="/instagram" element={<Redirect to="https://www.instagram.com/hack.melbourne/" />} />
      <Route path="/insta" element={<Redirect to="https://www.instagram.com/hack.melbourne/" />} />
      <Route path="/discord" element={<Redirect to="https://discord.gg/tEQ5m6ayTV" />} />
      <Route path="/facebook" element={<Redirect to="https://www.facebook.com/hackmelbourne/" />} />
      <Route path="/fb" element={<Redirect to="https://www.facebook.com/hackmelbourne/" />} />
      <Route path="/linkedin" element={<Redirect to="https://au.linkedin.com/company/hackmelbourne" />} />
      <Route path="/tiktok" element={<Redirect to="https://www.tiktok.com/@hack.melbourne" />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
