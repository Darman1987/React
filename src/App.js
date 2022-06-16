import Navbar from './Navbar'; /*This is the way to import components */
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar /> {/*This is the way to call components */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;