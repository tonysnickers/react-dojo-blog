import { useState } from "react";

const Home = () => {
  // let name = "mario";
  const [name, setName] = useState("mario")
  const [age, setAge] = useState(27)

  const handleClick = () => {
    setName("tony")
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;

