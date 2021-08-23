import './App.css';
import MainBanner from './Components/MainBanner/MainBanner';
import NavBar from './Components/NavBar/NavBar'
import NewCard from './Components/NewCard/NewCard';
import TitleBar from './Components/Reusable/TitleBar/TitleBar';
import TopBar from './Components/TopBar/TopBar'

function App() {
  return (
    <div className="App">
      <TopBar title="WELCOME TO INDIA SMART GRID KNOWLEDGE PORTAL" />
      <NavBar />
      <MainBanner />
      <TitleBar borderColor="#3d81c7" />
      <div className="NewCardContainer">
        <NewCard/>
        <NewCard/>
        <NewCard/>
      </div>
    </div>
  );
}

export default App;
