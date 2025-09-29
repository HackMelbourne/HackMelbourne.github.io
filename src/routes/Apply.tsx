import { useEffect, useRef, useState } from "react";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  createTheme,
  SelectChangeEvent,
  ThemeProvider,
  FormLabel,
  Stack,  
  IconButton,
} from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

import TitleHero from "../features/TitleHero/TitleHero";

import WebsiteQuestions from "./applicationQuestions/website";
import SponsorshipsQuestions from "./applicationQuestions/sponsorships";

import './Apply.css'
import applyBanner from '/img/applyBanner.jpg';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: "800",
    },
    h2: {
      fontWeight: "600",
    },
    h3: {
      fontWeight: "500",
    },
    h4: {
      fontWeight: "400",
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      margin: "0",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        margin: 'dense', // sets default margin
        fullWidth: true, // optional
      },
    },
    MuiSelect: {
      defaultProps: {
        margin: 'dense', // sets default margin
        fullWidth: true, // optional
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:focus': {
            color: 'primary.main', // or 'primary.main' for blue on focus
          },
        },
      },
    },
  }
});

const mdxComponents = {
  h1: (props: any) => <Typography variant="h1" {...props} />,
  h2: (props: any) => <Typography variant="h2" {...props} />,
  h3: (props: any) => <Typography variant="h3" {...props} />,
  h4: (props: any) => <Typography variant="h4" {...props} />,
  h5: (props: any) => <Typography variant="h5" {...props} />,
  h6: (props: any) => <Typography variant="h6" {...props} />,
  p: (props: any) => <Typography variant="body1" {...props} />,
  a: (props: any) => <Link {...props} />,
  ul: (props: any) => <List {...props} />,
  ol: (props: any) => <List component="ol" {...props} />,
  li: (props: any) => (
    <ListItem>
      <ListItemText primary={props.children} />
    </ListItem>
  ),
};

interface FormData {
  common: {
    name: string,
    email: string,
    major: string,
    availability: string,
    confirm: boolean,
    gradYear: string
    role: string
    resume?: File | undefined
  },
  website: {
    experience: string,
    ideas: string,
    goodweb: string
  },
  sponsorships: {
    collab: string,
    attract: string,
    engagement: string
  }
}

function fileSizeInMB(file?: File) {
  return file ? (file.size / (1024 * 1024)).toFixed(0) : ''
}

function WebsiteOfficerForm() {
  const [formData, setFormData] = useState<FormData>({
    common: {
      name: '',
      email: '',
      // Unsure how to implement atm
      gradYear: '',
      
      // Possibly move to dropdown?
      major: '',
  
      // Want to make this slider
      availability: '',
      confirm: false,
      role: '',
      resume: undefined
    },
    website: {
      experience: '',
      ideas: '',
      goodweb: '',
    },
    sponsorships: {
      collab: '',
      attract: '',
      engagement: ''
    }
  });

  const pageInfo = {
    title: "Apply",
    description: `Apply for HackMelbourne's officer intake for Semester 2, 2025!`,
  };

  const clearValue = (e: React.MouseEvent<HTMLElement>) => {
    // Hardcoded at the moment
    const section = 'common'
    const key = 'resume'
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: undefined,
      }
    }));
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const [section, key] = e.target.name.split('.') as [keyof FormData, string];
    const target = e.target as EventTarget & { name: string; value: string; files: File[] };

    let newValue: string | File = target.value
    if (target.files) {
      newValue = target.files[0]
      const sizeinMB = newValue.size / (1024 * 1024)

      if (sizeinMB > 8) {
        console.log("big")
      }
    }

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: newValue,
      }
    }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!formData.common.confirm) {
  //     alert("Please confirm your information before submitting.");
  //     return;
  //   }
  //   console.log("Form submitted:", formData);
  //   alert("Application submitted!");
  //   // Reset form or send to backend here
  // };

  return (
    <>
      <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      <ThemeProvider theme={theme}>
        <div className="apply-banner">
          <div className="apply-banner-bg"></div>
          <div className="apply-banner-content">
            <Typography className="apply-banner-title" variant="h2">
              Join<br/>HackMelbourne
            </Typography>
            <div className="apply-banner-grid">
              <div className="apply-banner-col">
                <div className="apply-banner-card">
                  <Typography variant="h4">
                    Inclusive Community
                  </Typography>
                  <Typography variant="body1">
                    Our mission is to make tech and hackathons accessible to everyone, regardless of background, experience level, or university.
                  </Typography>
                </div>
                <div className="apply-banner-card">
                  <Typography variant="h4">
                    Learning-Focused
                  </Typography>
                  <Typography variant="body1">
                    We help design and run educational workshops, panels, and resources that teach everything from software engineering fundamentals to advanced web, mobile, and AI development.
                  </Typography>
                </div>
              </div>
              <div className="apply-banner-col">
                <div className="apply-banner-card">
                  <Typography variant="h4">
                    Culture of Collaboration
                  </Typography>
                  <Typography variant="body1">
                    HackMelbourne is dedicated to creating a space where students can connect, share ideas, and grow together. It doesn't matter if you're a first-time coders or seasoned hackers!
                  </Typography>
                </div>
                <div className="apply-banner-card">
                  <Typography variant="h4">
                    Represent and Compete
                  </Typography>
                  <Typography variant="body1">
                    Passionate about hackathons yourself? Officers also have opportunities to compete in national and international hackathons representing HackMelbourne!
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="apply-banner" src={applyBanner}/> */}
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <FormLabel required>
                Full Name
              </FormLabel>
              <TextField
                placeholder="Elliot Guo"
                name="common.name"
                value={formData.common.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl fullWidth>
              <FormLabel required>
                Student email
              </FormLabel>
              <TextField
                placeholder="elliotguo@student.unimelb.edu.au"
                name="common.email"
                value={formData.common.email}
                onChange={handleChange}
              />
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                gap: 2, // space between fields (theme.spacing(2) = 16px)
                mb: 3,  // bottom margin after the row
              }}
            >
              <FormControl fullWidth>
                <FormLabel required>
                  Graduation Year
                </FormLabel>
                <TextField
                  placeholder="2027"
                  name="common.gradYear"
                  value={formData.common.gradYear}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl fullWidth>
                <FormLabel required>
                  Major
                </FormLabel>
                <TextField
                  placeholder="BSci"
                  name="common.major"
                  value={formData.common.major}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            {/* Have to add manual margin because select acts funny */}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <FormLabel required sx={{ 
                mb: 1,
                '&.Mui-focused': {
                  color: 'text.secondary',
                },
              }}>
                Which role are you applying for? 
              </FormLabel>
              <Select
                displayEmpty
                name="common.role"
                value={formData.common.role}
                onChange={handleChange}
                sx={() => ({
                  color:
                    formData.common.role ? 'text.primary' : 'text.secondary'
                })}
              >
                <MenuItem value="">
                  <em>Select a role</em>
                </MenuItem>
                <MenuItem value="Website Officer">Website Officer</MenuItem>
                <MenuItem value="Sponsorships Officer">Sponsorships Officer</MenuItem>
              </Select>
            </FormControl>
            {
              (() => {
                switch (formData.common.role) {
                  case "Website Officer":
                    return (
                      <WebsiteQuestions
                        formData={formData.website}
                        handleChange={handleChange}
                      />
                    );
                  case "Sponsorships Officer":
                    return (
                      <SponsorshipsQuestions
                        formData={formData.sponsorships}
                        handleChange={handleChange}
                      />
                    );
                  default:
                    return null;
                }
              })()
            }
            <Box display="flex" flexDirection="column" gap={1}>
              <FormLabel required>
                Resume/CV
              </FormLabel>
              <Box
                sx={{
                  border: '2px dashed #999',
                  borderRadius: 1,
                  minHeight: 50,
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: formData.common.resume ? 'text.primary' : 'text.disabled',
                  fontStyle: 'italic',
                  px: 2,
                }}
              >
                {formData.common.resume && (
                  <IconButton
                    aria-label="close"
                    onClick={clearValue}
                    sx={{ 
                      position: 'absolute', 
                      left: 0,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
                <div>{formData.common.resume ? formData.common.resume.name : 'No file uploaded yet'}</div>
                <Box sx={{ 
                  position: 'absolute', 
                  right: 15,
                  color: 'text.disabled', 
                  fontStyle: 'normal',
                }}>
                  {fileSizeInMB(formData.common.resume) ? fileSizeInMB(formData.common.resume) + " MB" : ''}</Box>
              </Box>
              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  hidden
                  name="common.resume"
                  onChange={handleChange}
                />
              </Button>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default WebsiteOfficerForm;
