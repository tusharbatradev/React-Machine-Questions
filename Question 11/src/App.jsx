import { useState } from "react";
import Accordion from "./Accordion";
import "./App.css";

function App() {
  const [accordionDisplay, setAccordionDisplay] = useState(false);
  const [accordionDisplay2, setAccordionDisplay2] = useState(false);

  return (
    <div style={{display : 'flex', flexDirection : 'column', gap : '4px'}}>
      <Accordion
        accordionState={accordionDisplay}
        setAccordionState={setAccordionDisplay}
        accordionHeading={"Accordion 1"}
        accordionContent={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Accordion
        accordionState={accordionDisplay2}
        setAccordionState={setAccordionDisplay2}
        accordionHeading={"Accordion 2"}
        accordionContent={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
    </div>
  );
}

export default App;
