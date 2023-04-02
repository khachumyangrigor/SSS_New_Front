import React from 'react';

export class Carusel1 extends React.Component{
    constructor(){
        super();
        this.state={
            carusel:[],
            caruselR1:[],
            caruselR2:[]
        }      
        this.caruselBodyX = 0;
    }

    componentDidMount=()=>{ 
        this.handelFetchPartners();
    }

    handelFetchPartners=()=>{
        fetch(`https://www.apis.seasidestartupsummit.com/partners/carusel/?method=getGeneralCarusel`)
        .then(resp => resp.json().then(jsonResp => {
            return resp.ok ? jsonResp : Promise.reject(jsonResp);
        })
        )
        .then(
            data => {
                this.setState({carusel:data},()=>{this.divideCarousel()});
            }
        )
    }
    divideCarousel=()=>{
        const caruselArr = this.state.carusel;
        let n = caruselArr.length/5;
        let result = new Array(Math.ceil(n))
        .fill()
        
        .map(_ => caruselArr.splice(0, 5));

        let caruselR1=[];
        let caruselR2=[];
        for(let i=0;i<result.length;i++){
            if(i%2===0){
                caruselR1=caruselR1.concat(result[i]);
            }
            else{
                caruselR2=caruselR2.concat(result[i]);
            }
        }
        this.setState({
            caruselR1:caruselR1,
            caruselR2:caruselR2
        })
        
    }
    handelReLink = link => {
        window.open(link, '_blank');
    }
    caruselNext = () => {
        let caruselBody = this.refs.caruelBody;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX < caruselBody.scrollWidth) {
            let quanty=null;
            if(window.innerWidth>1024)quanty=6;
            else if(window.innerWidth<1024 && window.innerWidth>500)quanty=4;
            else if(window.innerWidth<500)quanty=3;
            this.caruselBodyX += (document.getElementsByClassName('caruelBody')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].offsetWidth+(window.innerWidth*1.7/100))*quanty;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }
    caruselPrev = () => {
        let caruselBody = this.refs.caruelBody;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX > 0) {
            let quanty=null;
            if(window.innerWidth>1024)quanty=6;
            else if(window.innerWidth<1024 && window.innerWidth>500)quanty=4;
            else if(window.innerWidth<500)quanty=3;
            this.caruselBodyX -= (document.getElementsByClassName('caruelBody')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].offsetWidth+(window.innerWidth*1.7/100))*quanty;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }
    
    render=()=>{
        return(
            <div className="partner_carusel">
                <h3 className="subtitle">Companies Who Partnered With Us</h3>
                <div className="caruselGeneral">
                    <div className="pevCarusel"  onClick={() => this.caruselPrev()}><b/></div>
                    <div ref="caruelBody" className="caruelBody caruselAnimate">
                        <div>
                            {
                                this.state.caruselR1.map(item => (
                                        <div key={item.id} onClick={() => this.handelReLink(item.link)}>
                                            <div>
                                                <img src={`https://www.staff.seasidestartupsummit.com/user/partners/img/carusel/${item.logo}`} alt="SSS PARTNER" rel="index nofollow noopener nnoreferer" />
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                this.state.caruselR2.map(item => (
                                        <div key={item.id} onClick={() => this.handelReLink(item.link)}>
                                            <div>
                                                <img src={`https://www.staff.seasidestartupsummit.com/user/partners/img/carusel/${item.logo}`} alt="SSS PARTNER" rel="index nofollow noopener nnoreferer" />
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                        {/* {
                            this.state.carusel.map(item => (
                                    <div key={item.id} onClick={() => this.handelReLink(item.link)}>
                                        <div>
                                            <img src={`https://www.staff.seasidestartupsummit.com/user/partners/img/carusel/${item.logo}`} alt="SSS PARTNER" rel="index nofollow noopener nnoreferer" />
                                        </div>
                                    </div>
                            ))
                        } */}
                    </div>
                    <div className="nextCarusel" onClick={() => this.caruselNext()}><b/></div>
                </div>
            </div>
        )
    }
}

export class Carusel2 extends React.Component{
    constructor(){
        super();
        this.state={
            carusel:[],
            caruselR1:[],
            caruselR2:[]
        }      
        this.caruselBodyX = 0;
    }

    componentDidMount=()=>{
        this.handelFetchPartners();
    }

    handelFetchPartners=()=>{
        fetch(`https://www.apis.seasidestartupsummit.com/partners/carusel/?method=getGeneralCarusel2`)
        .then(resp => resp.json().then(jsonResp => {
            return resp.ok ? jsonResp : Promise.reject(jsonResp);
        })
        )
        .then(
            data => {
                this.setState({carusel:data},()=>{this.divideCarousel()});
            }
        )
    }
    divideCarousel=()=>{
        const caruselArr = this.state.carusel;
        let n = caruselArr.length/2
        let result = new Array(Math.ceil(caruselArr.length / n))
        .fill()
        .map(_ => caruselArr.splice(0, n));
        this.setState({
            caruselR1:result[0],
            caruselR2:result[1],
        })

    }
    handelReLink = link => {
        window.open(link, '_blank');
    }
    caruselNext = () => {
        let caruselBody = this.refs.caruelBody;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX < caruselBody.scrollWidth) {
            this.caruselBodyX += document.getElementsByClassName('caruelBody')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].offsetWidth;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }
    caruselPrev = () => {
        let caruselBody = this.refs.caruelBody;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX > 0) {
            this.caruselBodyX -= document.getElementsByClassName('caruelBody')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].offsetWidth;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }
    render=()=>{
        return(
            <div className="partner_carusel second">
                <div className="caruselGeneral">
                    <div className="pevCarusel"  onClick={() => this.caruselPrev()}><b/></div>
                    <div ref="caruelBody" className="caruelBody caruselAnimate">
                        <div>
                            {
                                this.state.caruselR1.map(item => (
                                        <div key={item.id} onClick={() => this.handelReLink(item.link)}>
                                            <div>
                                                <img src={`https://www.staff.seasidestartupsummit.com/user/partners/img/carusel/${item.logo}`} alt="SSS PARTNER" rel="index nofollow noopener nnoreferer" />
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                this.state.caruselR2.map(item => (
                                        <div key={item.id} onClick={() => this.handelReLink(item.link)}>
                                            <div>
                                                <img src={`https://www.staff.seasidestartupsummit.com/user/partners/img/carusel/${item.logo}`} alt="SSS PARTNER" rel="index nofollow noopener nnoreferer" />
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nextCarusel" onClick={() => this.caruselNext()}><b/></div>
                </div>
            </div>
        )
    }
}

