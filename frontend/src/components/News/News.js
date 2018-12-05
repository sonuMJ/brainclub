import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const NewsTemp = (props) => {
    return (
            <React.Fragment>
            <div className="row -b-news">
                <div className="col-lg-3 news_col">
                    <img src={props.news.image} alt="not found" className="img-responsive news_pic"/>
                </div>
                <div className="col-lg-9">
                    <p className="-b-news-heading"><Link to={'/news/'+props.news.news_id}>{props.news.title}</Link></p>
                    <i>{props.news.time}</i>
                    <p className="-b-news-content"><b> {props.news.place}:</b>{props.news.content}</p>
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
}

class News extends React.Component{
    state = {
        news:[]
    }
    componentDidMount(){
        this.fetchNews();
    }
    fetchNews(){
        fetch(`http://localhost:4000/news`)
        .then(res => res.json())
        .then(result => {
            this.setState({
                news:result
            });
            //console.log(result);
        });

    }
    render(){
        return(
            <div className="container-fluid">
                <h1>News</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                        {
                            Object.keys(this.state.news).map((i) => {
                                return(
                                    <NewsTemp news={this.state.news[i]} key={i}/>
                                )
                            })
                        }
                            {/* <NewsTemp news={"title"}/> */}
                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;