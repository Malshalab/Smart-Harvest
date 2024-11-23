// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
//   accordionSummaryClasses,
// } from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor: 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
//     {
//       transform: 'rotate(90deg)',
//     },
//   [`& .${accordionSummaryClasses.content}`]: {
//     marginLeft: theme.spacing(1),
//   },
//   ...theme.applyStyles('dark', {
//     backgroundColor: 'rgba(255, 255, 255, .05)',
//   }),
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// export default function CustomizedAccordions(props:any) {
//   const [expanded, setExpanded] = React.useState<string | false>('panel1');

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//       setExpanded(newExpanded ? panel : false);
//     };

//   return (
//     <div>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>{props.accordionTitle}</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//             {props.children}
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface CustomizedAccordionsProps {
  accordionTitle: string;
  panelName: string; // Panel identifier (name) to control expansion
  expanded?: string | false; // External expanded state
  onChange?: (panel: string) => void; // Callback to notify parent when the panel is toggled
  children: React.ReactNode;
}

export default function CustomizedAccordions({
  accordionTitle,
  panelName, // Unique panel name
  expanded: controlledExpanded, // Controlled expanded state from parent
  onChange: controlledOnChange, // Callback for changes
  children,
}: CustomizedAccordionsProps) {
  // Local state for internal control (if no controlled expanded state is passed)
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Handle change of expansion state
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    if (controlledOnChange) {
      // If parent has provided an onChange callback, notify parent
      controlledOnChange(panel);
    } else {
      // Otherwise, manage the state internally
      setExpanded(newExpanded ? panel : false);
    }
  };

  // Use controlled expanded state if provided by parent
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded === panelName : expanded === panelName;

  return (
    <div>
      <Accordion expanded={isExpanded} onChange={handleChange(panelName)}>
        <AccordionSummary aria-controls={`${panelName}-content`} id={`${panelName}-header`}>
          <Typography>{accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
