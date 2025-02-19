
import styles from "./FAQ.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Questions() {

  return (
    <main className={styles.Questions}>
		<h2>FQA</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>why am i here ?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            because.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>why sky is blue?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Placeholder content for this accordion. This is the second item's accordion body.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3>i have an error in my code can someone helpme fix it ?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Placeholder content for this accordion. This is the third item's accordion body.
          </p>
        </AccordionDetails>
      </Accordion>

	  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3>why cluster are so loud ?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Placeholder content for this accordion. This is the third item's accordion body.
          </p>
        </AccordionDetails>
      </Accordion>

	  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3>im stack , can u help me ?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Placeholder content for this accordion. This is the third item's accordion body.
          </p>
        </AccordionDetails>
      </Accordion>

    </main>
  );
}
export default Questions;