import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Notification(props) {
  return (
    <div class="container">
      <h1>
        A case has been filed against you by {props.propser} due to the{" "}
        {props.reason}, You have {props.deadline} to respond.
      </h1>
      <Button variant="contained">View More</Button>
    </div>
  );
}
