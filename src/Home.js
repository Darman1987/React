import { useState } from "react";

const Home = () => {
  // let name = 'diego'; //it doesn't work when using useState
  const [name, setName] = useState('diego');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'armando'; //it doesn't work when using useState
    setName('armando');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;