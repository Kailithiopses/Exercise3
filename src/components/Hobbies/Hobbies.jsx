import HobbyItem from "./HobbyItem";
import "./HobbiesStylesheets/Hobbies.css";
import Card from "../UI/Card";
import { useState } from "react";

function Hobbies(props) {
  return (
    <Card className="hobbies">
      <HobbyItem
        title={props.items[0].title}
        timeSpent={props.items[0].timeSpent}
        desc={props.items[0].desc}
      />

      <HobbyItem
        title={props.items[1].title}
        timeSpent={props.items[1].timeSpent}
        desc={props.items[1].desc}
      />

      <HobbyItem
        title={props.items[2].title}
        timeSpent={props.items[2].timeSpent}
        desc={props.items[2].desc}
      />

      <HobbyItem
        title={props.items[3].title}
        timeSpent={props.items[3].timeSpent}
        desc={props.items[3].desc}
      />
    </Card>
  );
}

export default Hobbies;
