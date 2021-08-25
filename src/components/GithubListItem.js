import {Link} from "react-router-dom"
import "./GithubList.css"

const GithubListItem = props => {
    const {issueDetails} = props 
    const {title,id,number,nodeId,state} = issueDetails


    return(
        <div className = "item-container">
            <Link to = {`/issues/${number}`}>
            <div className ="issue-item-container">
         
             <h4>title :{title}</h4> 
                <p>Id : {id}</p>
                <p>node Id : {nodeId}</p>
                <p>state : {state}</p>
                <p>number : {number}</p>
              
                </div>
                </Link>  
           
          
        </div>
    )

}

export default GithubListItem