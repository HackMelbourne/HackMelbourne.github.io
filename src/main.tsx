import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./index.css";

import Layout from "./layouts/Layout";

// Main Pages
import Events from "./routes/Events";
import Sponsors from "./routes/Sponsors";
import About from "./routes/About";
import Root from "./routes/Root";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";
import Calendar from "./routes/Calendar";

//Event Pages
import OWeek from "./routes/eventPages/OWeek";
import OWeekGame from "./routes/eventPages/OWeekGame";
import GameComplete from "./routes/eventPages/GameComplete";
import HackiethonQuiz from "./routes/eventPages/HackiethonQuiz";
import QuizResults from "./features/HackiethonQuiz/QuizResults";

//Google Analytics
import ReactGA from "react-ga4";
ReactGA.initialize("G-BCJY191MCE");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="sponsor" element={<Sponsors />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="O-Week" element={<OWeek />}></Route>
      <Route path="O-Week/playGame" element={<OWeekGame></OWeekGame>}></Route>
      <Route path="O-Week/complete" element={<GameComplete></GameComplete>}></Route>
      <Route path="Hackiethon/quiz" element={<HackiethonQuiz></HackiethonQuiz>}></Route>
      <Route path="Hackiethon/quiz/results" element={<QuizResults></QuizResults>}></Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
