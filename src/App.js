import './App.css';
import AllRoutes from "./routes/AllRoutes";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Navbar />
    </div>
  );
}

export default App;
