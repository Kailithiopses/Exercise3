import "./HobbiesStylesheets/HobbyItem.css";
import Card from "../UI/Card";

function HobbyItem(props) {
  return (
    <Card className="hobby-item">
      <div className="hobby-item__description">
        <h2>{props.title}</h2>
        <h3>{props.desc}</h3>
        <div className="hobby-item__time">{props.timeSpent} hours</div>
      </div>
    </Card>
  );
}

export default HobbyItem;
