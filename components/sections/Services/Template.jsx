// components/sections/Services/Template.jsx
import React from "react";

const PageTemplate = ({ data }) => {
  // Use the data to render the page content with the shared design
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Include other components or styles for your design */}
    </div>
  );
};

export default PageTemplate;
