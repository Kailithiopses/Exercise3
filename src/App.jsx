import HobbyItem from "./components/Hobbies/HobbyItem";
import Hobbies from "./components/Hobbies/Hobbies";
import NewHobby from "./components/NewHobbies/NewHobby";

function App() {
  const hobbies = [
    {
      id: "e1",
      title: "Drawing",
      timeSpent: 1,
      desc: "Drawing pencil portraits",
    },
    {
      id: "e2",
      title: "Hiking",
      timeSpent: 3,
      desc: "Walking in nature",
    },
    {
      id: "e3",
      title: "Painting",
      timeSpent: 2,
      desc: "Painting scenic landscapes",
    },
    {
      id: "e4",
      title: "Studying Languages",
      timeSpent: 8,
      desc: "Learning to speak UN languages",
    },
  ];

  const addHobbyHandler = (hobby) => {
    console.log("In app.js");
    console.log(hobby);
  };

  return (
    <div>
      <NewHobby onAddHobby={addHobbyHandler} />
      <Hobbies items={hobbies} />
    </div>
  );
}

export default App;
