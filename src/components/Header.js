import {Component} from "react" 
import {Link} from "react-router-dom"
import "./Header.css"

class Header extends Component {

    render(){
        return( 
        <div>
      
        {<div className = "list-container">
            <ul className = "list-items-container">
            
                <Link to = "/"> <p className = "list-item">Home</p></Link>
        
                <li className = "list-item">About</li>
                <li className = "list-item">Contact</li> 
            </ul>
        </div> }
    </div>
)
    }
   
}
export default Header