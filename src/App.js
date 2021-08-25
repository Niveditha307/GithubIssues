
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header  from './components/Header';
import GithubIssuesList  from './components/GithubIssuesList';
import GithubListItemDetails from "./components/GithubListItemDetails"

import './App.css';


function App() {
  return (
    
    <BrowserRouter>
     <div className = "header-container">
        <h1>GitHub Issues Page</h1>
        </div>
     <Header/> 
     { <Switch>
      <Route exact path = "/" component = {GithubIssuesList} />
      <Route exact  path = "/issues/:id" component = {GithubListItemDetails} />
    </Switch>}
    </BrowserRouter>
   
  
  );
}

export default App;
