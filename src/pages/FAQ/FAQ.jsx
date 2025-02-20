
import styles from "./FAQ.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/footer";
function FAQ() {

  return (
    <>
    <NavBar />
    <main className={styles.Questions}>
		<h2>FAQ</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <h3>How do I get started with programming?</h3>
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
          <h3>What programming language should I learn first?</h3>
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
          <h3>What are the most important concepts to understand in programming?</h3>
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
          <h3>How do I improve my coding skills?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Placeholder content for this accordion. This is the third item's accordion body.
          </p>
        </AccordionDetails>
      </Accordion>

    </main>
    <Footer />
    </>
  );
}

export default FAQ;