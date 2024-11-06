import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ header, body }) {
  return (
    <div>
      <Accordion elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {/* ======= HEADER ======= */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="accordiong-content"
          id="accordion-header"
          sx={{
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            '& .MuiAccordionSummary-content': {
              marginLeft: 1,
            },
          }}
        >
          <Typography variant="h6">{header}</Typography>
        </AccordionSummary>

        {/* ======= BODY ======= */}
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            padding: 2,
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <Typography>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
