import React from 'react';

class Diaries extends React.Component{
    constructor(){
        super();
        this.state={
            frame:'https://www.youtube.com/embed/EPldXGsNEbU?list=PLCcLpJIHQ5ve4KIqxUfYgqfQh6ucVV-Mo'
        }
        this.frameList=[
            'https://www.youtube.com/embed/EPldXGsNEbU?autoplay=1',
            'https://www.youtube.com/embed/4ehMGa7U_lg?autoplay=1',
            'https://www.youtube.com/embed/nQaXeWz9FnE?autoplay=1',
            'https://www.youtube.com/embed/gzsOtoObGVQ?autoplay=1',
        ]
    }
    changeDay = (e, nth) => {
        this.setState({
            frame: this.frameList[nth]
        });
        document.getElementsByClassName('diariesClip')[0].classList.remove("active");
        document.getElementsByClassName('diariesClip')[1].classList.remove("active");
        document.getElementsByClassName('diariesClip')[2].classList.remove("active");
        document.getElementsByClassName('diariesClip')[3].classList.remove("active");
        e.currentTarget.classList.add("active");
    } 
    render=()=>{
        return(
            <div className="diaries" >
                <h2>SSSholidays diaries</h2>
                <div className="body">
                    <div className="left">
                        <iframe title="frame1" src={this.state.frame} allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className="right">
                        <div onClick={(e)=>this.changeDay(e,0)} className="diariesClip">
                            <div><img src={require('./icn/day1.png')}  alt="day1" /></div>
                            <p>
                                SSSholidays | Day 1
                                <span>Seaside Startup Summit</span>
                            </p>
                        </div>
                        <div onClick={(e)=>this.changeDay(e,1)} className="diariesClip">
                            <div><img src={require('./icn/day2.png')}  alt="day2" /></div>
                            <p>
                                SSSholidays | Day 2
                                <span>Seaside Startup Summit</span>
                            </p>
                        </div>
                        <div onClick={(e)=>this.changeDay(e,2)} className="diariesClip">
                            <div><img src={require('./icn/day3.png')}  alt="day3" /></div>
                            <p>
                                SSSholidays | Day 3
                                <span>Seaside Startup Summit</span>
                            </p>
                        </div>
                        <div onClick={(e)=>this.changeDay(e,3)} className="diariesClip">
                            <div><img src={require('./icn/day4.png')}  alt="day4" /></div>
                            <p>
                                SSSholidays | Day 4
                                <span>Seaside Startup Summit</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Diaries;