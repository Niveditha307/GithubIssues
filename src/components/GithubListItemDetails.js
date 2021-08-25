import { Component } from "react";

import "./GithubList.css"
class GithubListItemDetails extends Component {

    state = {
        details : {}
    }

    componentDidMount(){
        this.getDetails()

    }

    getDetails = async() =>{
       const {match} = this.props 
       const {params} = match
       const {id} = params
      

       const response = await fetch(`https://api.github.com/repos/octocat/Hello-World/issues/${id}`)
       const data = await response.json()
       console.log(data)
       const updatedData = {
           url : data.url,
           
           
           createdAt : data.created_at,
           id : data.id,
           nodeId : data.node_id,
           number : data.number,
           repositoryUrl : data.repository_url,
           state : data.state,
           title : data.title,
           updatedAt : data.updated_at,
           user : data.user
       }
       console.log(updatedData)
       this.setState({
           details : data
       })
     }

    render(){
        const {details} = this.state 
        const {url,createdAt,id,nodeId,number,repositoryUrl,title,state,updatedAt}= details
        return(
            <div className = "details-container"> 
            <h1>Here Displaying issues details</h1>
            <p>url : {url}</p>
            <p>createdAt : {createdAt}</p>
            <p>id : {id}</p>
            <p>nodeId : {nodeId}</p>
            <p>number : {number}</p>
            <p>repositoryUrl : {repositoryUrl}</p>
            <p>title : {title}</p>
            <p>state : {state}</p>
            <p>updatedAt : {updatedAt}</p>
           
          
            </div>
        )
    }
}
export default GithubListItemDetails