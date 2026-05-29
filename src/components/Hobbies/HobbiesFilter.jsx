import "./HobbiesStylesheets/HobbiesFilter.css";
const HobbiesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="hobbies-filter">
      <div className="hobbies-filter__control">
        <label>Filter by hours spent</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  );
};
export default HobbiesFilter;
