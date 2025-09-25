import React from 'react';
import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl
} from '@mui/material';

interface props {
  formData: {
    collab: string,
    attract: string,
    engagement: string
  };
  handleChange: (e: React.ChangeEvent<any>) => void;
  toolsOptions: string[];
}

const WebsiteQuestions: React.FC<props> = ({ formData, handleChange }) => (
  <>
    <FormControl fullWidth>
      <FormLabel>
        Describe how you approach cross-team collaboration.
      </FormLabel>
      <TextField
        name="sponsorships.collab"
        value={formData.collab}
        onChange={handleChange}
        multiline
        rows={5}
      />
    </FormControl>

    <FormControl fullWidth>
      <FormLabel>
      How would you attract students who have never participated in hackathons or tech events before?
      </FormLabel>
      <TextField
        name="sponsorships.attract"
        value={formData.attract}
        onChange={handleChange}
        multiline
        rows={5}
      />
    </FormControl>

    <FormControl fullWidth>
      <FormLabel>
        Have you ever managed a social media account or created content that significantly increased engagement?
      </FormLabel>
      <TextField
        name="sponsorships.engagement"
        value={formData.engagement}
        onChange={handleChange}
        multiline
        rows={3}
      />
    </FormControl>
  </>
);

export default WebsiteQuestions;
