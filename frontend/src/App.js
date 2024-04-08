import './App.css';
import login from './screens/login';
import Prompt from './screens/prompt';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/login" Component={login}/> 
        <Route path="/kira" Component={Prompt}/> 
      </Routes>
    </Router>
  );
}

export default App;
