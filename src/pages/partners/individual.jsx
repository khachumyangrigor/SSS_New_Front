import React from 'react';

class InndividualPartner extends React.Component{
    constructor(){
        super();
        this.state={
            partnerImg:'1622636919.png',
            partnerName:'GIZ & EU4Business',
            parnerInfo:"Sevan Startup Summit is supported by the European Union through its EU4Business “Support to SME Development in Armenia” (EU-SMEDA) project (www.smeda.am), co-funded by Federal Ministry for Economic Cooperation and Development (BMZ) and implemented by German Development Cooperation GIZ through the Private Sector Development in South Caucasus Programme.",
            partnerStatus:'Co-organizer of SSS17/18/19',
            partnerVideo:'https://www.youtube.com/embed/U9jsDDXcsFc',
            // bigImg1:'1582627882.png',
            // bigImg2:'1582627883.png',
            // bigImg3:'1582627884.png',
            partnerlink:'https://www.giz.de/',
            next:1,
            prev:null
        }       
        this.bigPartner=[];
        this.nameList=[];
        this.fadeBox=React.createRef();
        this.fadeBox2=React.createRef();
    }

    componentDidMount=()=>{
        this.handelFetchPartners();
    }

    handelFetchPartners=()=>{
        fetch(`https://www.apis.seasidestartupsummit.com/partners/patrner/?method=getPartners`)
        .then(resp => resp.json().then(jsonResp => {
            return resp.ok ? jsonResp : Promise.reject(jsonResp);
        })
        )
        .then(
            data => {
                this.bigPartner=data;
                this.setState({prev:this.bigPartner.length-1});
            }
        )
    }
    
    fadeBoxAnim=()=>{
        this.fadeBox.current.classList.add('nextPrevFade');
        this.fadeBox2.current.classList.add('nextPrevFadeNone');
        setTimeout(()=>{
            this.fadeBox.current.classList.remove('nextPrevFade');
        },600)
        setTimeout(()=>{
            this.fadeBox2.current.classList.remove('nextPrevFadeNone');
        },1100)
    }

    handelPrevPartner=id=>{
        this.fadeBoxAnim();
        let next=this.state.next;
        let prev=this.state.prev;
        const newList=this.bigPartner[prev];
        this.setState({
            partnerImg:newList.logo,
            partnerName:newList.name,
            parnerInfo:newList.info,
            partnerStatus:newList.status,
            partnerVideo:newList.video,
            // bigImg1:newList.img1,
            // bigImg2:newList.img2,
            // bigImg3:newList.img3,
            partnerlink:newList.link,
        },()=>{
            if(prev!==0){
                prev=prev-1;
                console.log(5)
                prev===this.bigPartner.length-2?next=0:next=prev+2;
            }
            else{
                prev=this.bigPartner.length-1;
                next=1;
            }
            this.setState({
                next:next,
                prev:prev
            });
        });
    }

    handelNextPartner=id=>{
        this.fadeBoxAnim();
        let next=this.state.next;
        let prev=this.state.prev;
        const newList=this.bigPartner[next];
        this.setState({
            partnerImg:newList.logo,
            partnerName:newList.name,
            parnerInfo:newList.info,
            partnerStatus:newList.status,
            partnerVideo:newList.video,
            // bigImg1:newList.img1,
            // bigImg2:newList.img2,
            // bigImg3:newList.img3,
            partnerlink:newList.link,
        },()=>{
            if(next!==this.bigPartner.length-1){
                next=next+1;
                next===1?prev=this.bigPartner.length-1:prev=next-2;
            }
            else{
                next=0;
                prev=this.bigPartner.length-2;
            }
            this.setState({
                next:next,
                prev:prev
            });
        });
    }

    handelPartnerNameChange=id=>{
        this.fadeBoxAnim();
        let newList
        for(let i=0; i<this.bigPartner.length; i++){
            if(this.bigPartner[i].id===id){
               newList=this.bigPartner[i];
               break;
            }
        }
        
        this.setState({
            partnerImg:newList.logo,
            partnerName:newList.name,
            parnerInfo:newList.info,
            partnerStatus:newList.status,
            partnerVideo:newList.video,
            // bigImg1:newList.img1,
            // bigImg2:newList.img2,
            // bigImg3:newList.img3,
            partnerlink:newList.link,
        });
    }
    render=()=>{
        const bigImgURl='https://www.staff.seasidestartupsummit.com/user/partners/img/big';
        const logoImgURl='https://www.staff.seasidestartupsummit.com/user/partners/img/logo';
        const {partnerImg, partnerName, parnerInfo, partnerStatus, partnerVideo, bigImg1, bigImg2, bigImg3,partnerlink,next,prev}=this.state;
        return(
            <div className="individual_partners" ref={this.fadeBox}>
                {/* <div className="partnerList">
                    {
                        this.bigPartner.map(bigPartners => (
                            <span onClick={()=>this.handelPartnerNameChange(bigPartners.id)} key={bigPartners.id}>
                                {bigPartners.name}       
                            </span>
                        ))
                    }
                </div> */}
                <h3 className="subtitle">Meet Some Of Our Previous Partners</h3>
                <div>
                    <div className="partner_individual_info">
                        <div className="logoBox"><img src={`${logoImgURl}/${partnerImg}`} alt={partnerName}/></div>
                        <p>{parnerInfo}</p>
                        <div className="partner_site_box">
                            <div><a href={partnerlink} target="_blank" rel="nofollow"><img src={require('./img/icons/globus.png')} alt="site"/></a></div>
                            <div>
                                <p>{partnerName}</p>
                                <span>{partnerStatus}</span>
                            </div>
                        </div>
                    </div>
                    <div className="partner_individual_info" ref={this.fadeBox2}>
                        <iframe title="Our Partner" width="853" height="480" src={partnerVideo} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                {/* <div>
                    <div className="partnerImgBox">
                        <div><img src={`${bigImgURl}/${bigImg1}`} alt="partner"/></div>
                        <div><img src={`${bigImgURl}/${bigImg2}`} alt="partner"/></div>
                        <div><img src={`${bigImgURl}/${bigImg3}`} alt="partner"/></div>
                    </div>
                </div> */}
                <div>
                    <div className="partnerImgBoxStep">
                        <span>previous</span>
                        <div className="individual_big_img_prev" onClick={()=>this.handelPrevPartner(prev)}/>       
                        <div className="individual_big_img_next" onClick={()=>this.handelNextPartner(next)}/>
                        <span>next</span>       
                    </div>
                </div>
            </div>
        );
    }
}

export default InndividualPartner;