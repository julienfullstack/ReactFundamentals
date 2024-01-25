import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props){
  const { coffee } = props;
  
  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: coffee.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};


export default EditCoffeeForm;