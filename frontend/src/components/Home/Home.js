import React from 'react';
import './Home.css';

const HomeAbout = () => {
    return (
        <div>
            <div className="col-lg-4">
                <img src="/images/icon2.png" className="-b-homeabout-img" />
            </div>
            <div className="col-lg-8">
                <h1 className="-b-homeabout-title">About The BRAIN Initiative</h1>
                <blockquote className="-b-blockquote">
                    <p className="-b-blockquote-paragraph">
                    Mauris euismod, augue id aliquam efficitur, est tortor vulputate tellus, at ultricies ex mauris ut tortor.
                     Quisque fermentum lectus sem, sit amet convallis dolor dictum id. Nullam dapibus sapien ex, vitae malesuada tellus hendrerit eu. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                    </p>
                    <footer>From Lorem ipsum</footer>
                </blockquote>
                <button className="btn -b-homeabout-btn">Learn More</button>
            </div>
        </div>
    )
}
const HomeWhy = () => {
    return(
        <div>
            <h1 className="text-center -b-homeabout-title">WHY BRAIN CLUB</h1>
            
            <div className="col-lg-8">
                <p className="text-center -b-homewhy-paragraph">
                Quisque consectetur mattis vehicula. In dapibus lobortis<br/> arcu eget aliquet. Phasellus sem lectus,
                placerat vel maximus id,<br/> varius in leo. Pellentesque dignissim<br/> molestie sem sed dignissim
                </p>
            </div>
            <div className="col-lg-4 -b-homewhy-bg">
                
            </div>
            <div style={{clear:"both",marginLeft:'45%',paddingBottom:'100px'}}>
                <button className="text-center btn -b-homeabout-btn">Read More</button>
            </div>
        </div>
    )
}

class Home extends React.Component{
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
                <div className="container-fluid -b-home-bg" >
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="-b-homemain-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <HomeAbout />
                </div>
                <div className="container-fluid">
                    <HomeWhy />
                </div>
            </div>
        );
    }
}

export default Home;