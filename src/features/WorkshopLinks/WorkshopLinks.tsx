import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { WorkshopLinkProps } from "../../features/WorkshopLinks/WorkshopLinks.model";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const WorkshopLinks: React.FC<WorkshopLinkProps> = ({ title, description, link, date }) => {
  return (
    <div className="workshop-link">
      <iframe className="w-full" height="315" src={link} title={title}></iframe>
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

interface WorkshopDisplayProps {
  workshopLinks: WorkshopLinkProps[];
}

const WorkshopDisplay: React.FC<WorkshopDisplayProps> = ({ workshopLinks }) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Group workshops by year
  const workshopsByYear = workshopLinks.reduce((acc: { [key: string]: WorkshopLinkProps[] }, workshop) => {
    const year = new Date(workshop.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(workshop);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(workshopsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div>
      {sortedYears.map((year) => (
        <Accordion expanded={expanded === year} onChange={handleChange(year)} key={year}>
          <AccordionSummary aria-controls={`${year}-content`} id={`${year}-header`}>
            <Typography>{year}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {workshopsByYear[year].map((workshop, index) => (
              <WorkshopLinks
                key={index}
                title={workshop.title}
                description={workshop.description}
                link={workshop.link}
                date={workshop.date}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default WorkshopDisplay;
