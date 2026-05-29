import "./NewHobbiesStylesheets/NewHobby.css";
import HobbyForm from "./HobbyForm";

const NewHobby = (props) => {
  const saveHobbyDataHandler = (enteredHobby) => {
    const hobbyData = {
      ...enteredHobby,
      id: Math.random().toString(),
    };
    console.log(hobbyData);
    props.onAddHobby(hobbyData);
  };
  return (
    <div className="new-hobby">
      <HobbyForm onSaveHobbyData={saveHobbyDataHandler} />
    </div>
  );
};

export default NewHobby;
