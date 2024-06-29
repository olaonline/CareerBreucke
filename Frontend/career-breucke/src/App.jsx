import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <JobDetails/>
      <Footer/>
    </div>
  );
}

export default App;