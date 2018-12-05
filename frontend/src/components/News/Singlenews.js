import React from 'react';

const NewsTemplate = (props) => {
    return (
        <div>
            <h1>{props.content.title}</h1>
            <i>{props.content.time}</i><br/>
            <img src={props.content.image} className="img-responsive" alt="not found"/>
            <p><b>{props.content.place} : </b>{props.content.content}</p>
        </div>
    )
}

class Singlenews extends React.Component{
    state = {
        news:[]    
    }
    componentDidMount(){
        this.setState({
            user:this.props.match.params.id
        })
        this.fetchNews();
    }
    fetchNews(){
        fetch(`http://localhost:4000/news/${this.props.match.params.id}`)
        .then(res => {
            if(!res.ok) {
                // redirect to 404 page
                throw Error("Network Request Failed");
              }
              return res.json()
        })
        .then(result => {
            this.setState({
                news:result[0]
            });
        });
    }
    render(){
        return(
            <div className="container">
                <NewsTemplate content={this.state.news}/>
            </div>
        )
    }
}

export default Singlenews;