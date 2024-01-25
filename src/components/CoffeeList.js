import React from "react";
import PropTypes from "prop-types";
import Ticket from './Ticket';

function TicketList(props) { 
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;