import React, { useState } from 'react';
import { Button, TextField, FormControl, Checkbox, FormLabel, FormControlLabel } from '@mui/material';
import TitleHero from '../../features/TitleHero/TitleHero';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Ranking from '../../features/Leaderboard/Ranking';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3B52A',
    },
    secondary: {
      main: '#5899F5',
    },
  },
});

const SubmitButton = styled(Button)({
  boxShadow: 'none',
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',
  padding: '6px 12px',
  border: '2px solid',
  lineHeight: 1.5,
  borderColor: '#5899F5',
  backgroundColor: 'rgba(9,  31,  62,  0.5)',
  '&:hover': {
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    borderColor: '#5899F5',
    backgroundColor: 'rgba(9,  31,  62,  0.5)',
  },
  '&:active': {
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    borderColor: '#5899F5',
    backgroundColor: 'rgba(9,  31,  62,  0.5)',
  },
  '&:focus': {
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    borderColor: '#5899F5',
    backgroundColor: 'rgba(9,  31,  62,  0.5)',
  },
});

export default function RiserGame() {
  const pageInfo = {
    title: 'O-Week Riser',
    description: `Test your skill and luck at our riser game where you just need to hit the button at the right time. Win big prizes`,
  };

  const leaderboard = [
    {
      rank: 1,
      name: 'First Last',
      score: 7999,
    },
    {
      rank: 2,
      name: 'First Last',
      score: 7999,
    },
  ];

  // Animations
  const scrollRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  let opacityValue = useTransform(scrollYProgress, [0, 0.6], ['100%', '0%']);
  let scaleValue = useTransform(scrollYProgress, [0, 0.9], ['1', '0.9']);

  // Form Field Values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isMember, setIsMember] = useState(false);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      studentId,
      isMember,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 w-screen max-w-full">
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }} className="">
        <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      </motion.section>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl flex justify-center mb-8">Sign up to join</h1>
        <FormControl>
          <div className="border border-[#5899F5] bg-[#5899F5] bg-opacity-5 p-12 flex flex-col justify-center gap-10 rounded-md">
            <ThemeProvider theme={theme}>
              <TextField
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="standard"
                color="primary"
                label="First Name"
                InputLabelProps={{
                  sx: { color: 'white', '&.Mui-focused': { color: 'white' } },
                }}
                sx={{ input: { color: 'white' } }}
                focused
              />
              <TextField
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="standard"
                color="primary"
                label="Last Name"
                InputLabelProps={{
                  sx: { color: 'white', '&.Mui-focused': { color: 'white' } },
                }}
                sx={{ input: { color: 'white' } }}
                focused
              />
              <TextField
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                color="primary"
                label="Email"
                InputLabelProps={{
                  sx: { color: 'white', '&.Mui-focused': { color: 'white' } },
                }}
                sx={{ input: { color: 'white' } }}
                focused
              />
              <TextField
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                variant="standard"
                color="primary"
                label="Student ID"
                InputLabelProps={{
                  sx: { color: 'white', '&.Mui-focused': { color: 'white' } },
                }}
                sx={{ input: { color: 'white' } }}
                focused
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isMember}
                    onChange={(e) => setIsMember(e.target.checked)}
                    sx={{ color: 'white' }}
                  />
                }
                label="HackMelbourne Member"
              />
              <SubmitButton type="submit" variant="outlined" color="secondary" sx={{ marginTop: '2em' }}>
                Submit
              </SubmitButton>
            </ThemeProvider>
          </div>
        </FormControl>
      </form>

      <h2 className="text-4xl text-center font-bold mb-10">Leaderboard</h2>
      <div className="flex flex-col gap-6">
        {leaderboard.map((entry) => (
          <Ranking {...entry} />
        ))}
      </div>
    </div>
  );
}
