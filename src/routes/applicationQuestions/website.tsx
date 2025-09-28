import React from 'react';
import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl
} from '@mui/material';

interface websiteProps {
  formData: {
    experience: string,
    ideas: string,
    goodweb: string
  };
  handleChange: (e: React.ChangeEvent<any>) => void;  
}

const WebsiteQuestions: React.FC<websiteProps> = ({ formData, handleChange }) => (
  <>
    <FormControl fullWidth>
      <FormLabel>
        Describe any prior experience you have creating or designing websites.
      </FormLabel>
      <TextField
        name="website.experience"
        value={formData.experience}
        onChange={handleChange}
        multiline
        rows={5}
      />
    </FormControl>

    <FormControl fullWidth>
      <FormLabel>
        What do you think makes a good website?
      </FormLabel>
      <TextField
        name="website.goodweb"
        value={formData.goodweb}
        onChange={handleChange}
        multiline
        rows={5}
      />
    </FormControl>

    <FormControl fullWidth>
      <FormLabel>
        Tell us about any ideas you have for the website!
      </FormLabel>
      <TextField
        name="website.ideas"
        value={formData.ideas}
        onChange={handleChange}
      />
    </FormControl>
  </>
);

export default WebsiteQuestions;
