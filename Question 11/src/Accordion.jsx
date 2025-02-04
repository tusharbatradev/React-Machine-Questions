import React from "react";

const Accordion = ({
  accordionState,
  setAccordionState,
  accordionHeading,
  accordionContent,
}) => {

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
      <h2
        onClick={() => setAccordionState((prev) => !prev)}
        style={{
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          margin: "0px",
          minWidth: "500px",
        }}
      >
        {accordionHeading} {accordionState ? "⬆️" : "⬇️"}
      </h2>
      {accordionState && (
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            margin: "0px",
            maxWidth: "500px",
          }}
        >
          {accordionContent}
        </p>
      )}
    </div>
  );
};

export default Accordion;
