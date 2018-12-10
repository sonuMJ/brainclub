import React from 'react';
import { Link } from 'react-router-dom';
import './QA.css';


class QA extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            articles : [],
            details : "",
            isFetching: true,
            child : "",
            clickedID: "",
            detailFetching:false,
            tags:""
        }
    }
    componentDidMount() {
        this.renderHome();
    }
    renderHome(){
        console.log("rendering home");
        
        fetch('/qa/posts/all')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            articles: json.post,
            isFetching:false
          });
        });
    }
    searchChange(event){

        var search = event.target.value;
        if(search == ""){
            this.setState({
                isFetching: false
            });
            setTimeout(()=>{
                this.renderHome();
            },1000);

        }
        else{
            this.setState({
                isFetching: true,
                articles:[]
            });
            fetch('/qa/search', {
                method: 'GET',
                headers: {
                    'search_query': search
                }
            }).then(response => response.json())
            .then(json => {
              console.log(json);
              this.setState({
                isFetching: false,
                articles: json.post
              });
            });
        }
    }
    validate(title,content){
        var bool = true;
        if(title=="")
        {
          alert("title empty");
          bool = false;
        }
        else{
          if(content=="")
          {
            alert("content empty");
            bool = false;
          }
          else{
            if (content.length>300){
              alert("content exceed length");
              bool = false;
            }
            if (content.length <2){
              alert ("content too small");
              bool = false;
            }
          }
        }
        return bool;
      }
      handleNewPost(){
          var title = this.refs.post_title.value;
          var desc = this.refs.post_description.value;
          console.log('====================================');
          console.log(title);
          console.log(desc);
          console.log('====================================');
          if(this.validate(title,desc)){
              fetch('/qa/posts', {
                  method: 'POST',
                  body: JSON.stringify({
                    "content":desc
                  }),
                  headers: {
                      'Content-Type': 'application/json',
                      'member_id': '5726',
                      'head': title
                  }
                }).then(response => response.json())
                  .then(json => {
                      console.log(json);
                  if(String(json.response) === 'Success'){
                        console.log("User insertion successfully");  
                        this.setState({
                            status:"Success",
                            description:"User added successfully",
                        });
                  }
                  else{
                        console.log("User insertion unsuccessfull");
                        this.setState({
                            status:"Failed",
                            description:"User insertion unsuccessfull"
                        });
                  }
                }).catch(err => err);
                setTimeout(()=>{this.renderHome()},500);
          }
      }
      render(){
        var context = this;
          var all = this.state.articles.map(function(data) {
              var parsedID = data.post_id;
            return (
                <React.Fragment>
                    <Link to={`posts/`+parsedID} style={{textDecoration:'none'}}>
                        <div className="row query_card"  key={data.post_id}>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                            <img src="/images/user_ico.png" className="img-responsive AllPost_user_ico" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-11">
                            <h4 className="AllPost_head">{data.query}</h4>  
                            <p className="AllPost_body">{data.body}</p>                 
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-11">
                            <p className="AllPost_date">{data.date}</p>
                        </div>
                        </div>
                        {context.state.detailFetching && data.id === context.state.clickedID && <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"><div className="text-center" style={{padding:100+'px'}}><div class="loader"></div><h3 style={{marginTop:20+'px'}}>Please Wait...</h3></div></div> }
                        {data.id === context.state.clickedID && !context.state.detailFetching && <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginBottom: 20+'px'}}  >{context.state.child}</div>}
                    </Link>
                </React.Fragment>
            );
          });
          return(
            <div>
                <div className="container-fluid QA_main">                
                    <div className="container text-center">    
                    <form class="row">
                        <div class="form-group col-lg-10 col-md-10 col-sm-10 col-xs-8">
                                <input type="text" className="form-control" placeholder="Search..." onChange={this.searchChange.bind(this)} autoFocus="true"/>
                        </div>
                        <div class="form-group col-lg-2 col-md-2 col-sm-2 col-xs-4">
                             <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Ask a Doctor</button>
                        </div>
                    </form>              
                    </div>
                    <div className="container-fluid" style={{height:100+'vh'}}>
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header text-center">
                                    <h2 class="modal-title">Ask a Doctor</h2>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group Post_form">
                                            <label for="usr">Title:</label>
                                            <input type="text" class="form-control" placeholder="Title" ref="post_title" autoFocus="true"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="usr">Description:</label>
                                        <textarea class="form-control" rows="5"  placeholder="Description" ref="post_description"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary form-control" onClick={this.handleNewPost.bind(this)}  data-dismiss="modal">Submit</button>                              
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* {this.state.isFetching && <Loader/>} */}
                        {this.state.articles.length != 0 && !this.state.isFetching && <div style={{paddingTop:20+'px'}}>{all}</div>}
                        {this.state.articles.length == 0 && !this.state.isFetching && <div className="row" style={{paddingTop:20+'px'}}><h3>No results Found</h3></div> }
                    </div>

                </div>
            </div>
          );
    }
}

export default QA;