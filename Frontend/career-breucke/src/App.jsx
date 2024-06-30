import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Job from "./components/Job";
import Home from "./components/Home";
import JobForm from "./components/JobForm";
import { Route, Routes } from "react-router-dom";
import JobDetails from "./components/JobDetails";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/job" element={<Job/>}/>
          <Route path="/add-job" element={<JobForm/>}/>
          <Route path="/job/details" element={<JobDetails/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
