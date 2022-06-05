import { useState } from "react";

export const Triangle = () => {
  const [number, setNumber] = useState({
    number1: null,
    number2: null,
    number3: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumber({ ...number, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const result = (x, y, z) => {
    if (x === y && y === z) {
      return "It is Equalityeral Triangle";
    } else if (x === y || y === z || z === x) {
      return "It is a Isosceles Triangle";
    } else {
      return "It is a Scalene";
    }
  };
  return (
    <div className="triangle-container">
      <div className="result">
        {" "}
        {result(number.number1, number.number2, number.number3)}
      </div>
      <div className="input-container">
        <form>
          <label>
            X :
            <input
              className="text"
              type="number"
              name="number1"
              value={number.number1}
              onChange={handleChange}
            />
          </label>
          <label>
            Y :
            <input
              type="number"
              name="number2"
              value={number.number2}
              onChange={handleChange}
            />
          </label>
          <label>
            Z:
            <input
              type="number"
              name="number3"
              value={number.number3}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
