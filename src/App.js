import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const colors = ['blue','yellow','red'];
 const person = { name: 'diego', age: 35 };
  const link = 'http://www.google.com';

  return (
    
    <div className="App">
     {/* only can have one root element in JSX <div className="App">*/}
    {/* Insted of use attribute class we should use className*/}
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ person.name }</p> 
         
        <p>{ 10 }</p>
        <p>{ colors }</p>
        <p>{ "hello, friends" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;