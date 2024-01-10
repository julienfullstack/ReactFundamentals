import React from "react";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

export default NewTicketForm;