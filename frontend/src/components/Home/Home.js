import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const HomeAbout = () => {
    return (
        <div>
            <div className="col-lg-4 col-md-4">
                <img src="/images/bg12.jpg" className="-b-homeabout-img img-responsive" />
            </div>
            <div className="col-lg-8 col-md-8">
                <h1 className="-b-homeabout-title">BRAIN SUCCEEDS HEART AS ORGAN OF MIND</h1>
                <blockquote className="-b-blockquote">
                    <p className="-b-blockquote-paragraph">
                    Higher brain functions are the operations of the brain that stand at the pinnacle of evolution and are largely unique to humans. 
                    Verbal communication, the ability to “think in the future,” and the capacity to hold multiple tracks of complex information
                     “on-line” at the same time, are examples of higher mental functions that are subserved by various structures in the brain.
                    </p>
                </blockquote>
                <Link to={"/about-brain"} className="btn -b-homeabout-btn">Learn More</Link>
            </div>
        </div>
    )
}
const HomeWhy = () => {
    return(
        <div>
            <h1 className="text-center -b-homeabout-title">WHY BRAIN CLUB</h1>
            
            <div className="col-lg-8 col-md-8">
                <p className="text-center -b-homewhy-paragraph">
                Quisque consectetur mattis vehicula. In dapibus lobortis<br/> arcu eget aliquet. Phasellus sem lectus,
                placerat vel maximus id,<br/> varius in leo. Pellentesque dignissim<br/> molestie sem sed dignissim
                </p>
            </div>
            <div className="col-lg-4 col-md-4 -b-homewhy-bg">
                
            </div>
            <div style={{clear:"both",marginLeft:'45%',paddingBottom:'100px'}}>
                <button className="text-center btn -b-homeabout-btn_readmore">Read More</button>
            </div>
        </div>
    )
}
const Blockquote = () => {
    return(
        <div>
            <div className="container-fluid -b-blockquote-bottom">
                    <div className="col-lg-10 col-md-10">
                    Morbi diam ipsum, sollicitudin a consectetur quis, rhoncus eu justo.
                    Aliquam erat volutpat. Morbi ullamcorper dapibus metus sit amet maximus.
                    Vestibulum sollicitudin tortor massa.
                    Proin sem nunc, dictum eu ante non, efficitur semper arcu. Curabitur tincidunt mi mauris, 
                    at iaculis erat tristique nec. Morbi condimentum, felis in pellentesque portaeros magna tempor enim, ac lacinia justo tellus at nunc.
                    Aliquam eu justo et nulla sagittis varius eget sit amet metus
                    <footer>Aenean quis</footer>
                   </div>
                   <div className="col-lg-2 col-md-2">
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/25/brain-1294993_960_720.png" className="img-responsive"/>
                   </div>
            </div>
        </div>
    )
}
const VideoBg = () =>{
    
    return(
        <div>
            <video autoPlay loop muted style={{width:'100%'}}>
                <source type="video/mp4" src="/video/vid.mp4"></source>
            </video> 
            <div className="-b-homemain-content">
                <div className="col-lg-8 col-md-8">
                    <p className="-b-homemain-title" id="b_head"></p>
                </div>
                <div className="col-lg-4 col-md-4">

                </div>
            </div>
        </div>
        
        
    )
}

class Home extends React.Component{
    
    componentDidMount(){
        window.scrollTo(0,0);
        var head = document.getElementById('b_head') ;
        var txt = "BRAIN WAVE: A JOURNEY “INTO” YOUR MIND";
        var i = 0;
        function LoadHeading(){
            if(i < txt.length){
                head.innerHTML += txt.charAt(i);
                i++;
                setTimeout(LoadHeading,100);
            }
        }
        LoadHeading();
    }
    
    render(){
        return(
            <div>
                {/* <div class="container-fluid -b-home-main">
                    <div class="-b-home-bg1">
                        <b class="-b-home-main-text">Advancing Our<br/> Understanding Of<br/> The Brain</b>
                    </div>  
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <h2 class="para">'The human brain is the most complicated<br/>organ in the body - probably the most complicated,<br/> calculated machine that we<br/> know of.'</h2>

                            <i class="italic">— Dr. Story Landis (Emeritus Scientist, NIH), December 2016</i>
                        </div>
                        <div class="col-lg-4">
                            <img src="../images/b_icon.png" alt="not found" class="img-responsive brain_pic" width="60%"/>
                        </div>
                    </div>
                </div> */}
                {/* /// */}
                {/* <div className="container-fluid -b-home-bg" >
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="-b-homemain-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div> */}
                
                <div>
                    <VideoBg />
                </div>
                <div className="container-fluid">
                    <HomeAbout />
                </div>
                <div className="container-fluid">
                    <HomeWhy />
                </div>
                <div className="container-fluid -b-blockquote-bottom-div">
                    <Blockquote />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;