import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className=" w-full ">
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: "auto",
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "block",
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "none",
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "orange" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ color: "orange", fontWeight:"500" }}>
            How can i booking ?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "justify" }}>
            For booking process you need to press " BOOK NOW " button and after
            that you redirected on booking form. Now fill all required details
            submit and make payment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "orange" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{ color: "orange", fontWeight:"500" }}>
            How to check Availability for booking ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "justify" }}>
            If you want to check booking availablity then you need to go booking
            availability checking section. Now enter date for checking and press
            " Check " button.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "orange" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{ color: "orange", fontWeight:"500" }}>
            How can i payment online ?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "justify" }}>
            First of all you need to proceed booking process. Fill all required
            details and submit. After the submission you are redirected on
            payment page. Now you payment method and proceed. After the
            successful payment you are redirected on booking confirmation page.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
