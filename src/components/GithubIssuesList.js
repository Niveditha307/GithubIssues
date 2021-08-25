import {Component} from "react"

import GithubListItem from "./GithubListItem"

class GithubIssuesList extends Component {

    state = {
        githubIssueList : []
    }

    componentDidMount() {
        this.getIssuesData()
    }

    getIssuesData = async () => {
        const response = await fetch("https://api.github.com/repos/octocat/Hello-World/issues")
        const data = await response.json()

      
        const updateData = data.map(item => ({
            title : item.title,
            id : item.id,
            state : item.state,
            createdAt : item.created_at,
            updatedAt : item.updated_at,
            nodeId : item.node_id,
            number : item.number

        }))

        this.setState({
            githubIssueList : updateData,
        })
        
    } 

    render(){
        const {githubIssueList} = this.state 
        return(
            <div className = "container">
                {githubIssueList.map(eachIssue => (
                    <GithubListItem  issueDetails = {eachIssue} key = {eachIssue.id}/>
                ))}
              
            </div>
        )

       
    
    }
}

export default GithubIssuesList