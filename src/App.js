import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <NavBar />
    <br />
    <div className="container">
      <div className="row">
        <div className=" col-lg-offset-4 col-lg-8">
          {/* <Forms /> */}
          <h1>Hello World!</h1>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
