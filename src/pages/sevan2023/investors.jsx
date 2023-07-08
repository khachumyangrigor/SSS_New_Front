import React from 'react';



class Investors extends React.Component {
    constructor() {
        super();
        this.state = {
            investors: [],
            error: '',
            id: 0
        }
        this.caruselBodyX = 0;
        this.mounted = true;
    }

    handelInvestorsFatch=()=>{
        if(!this.mounted) return;
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/upcomming/investors/?method=getInvestors2022&id=0';
        this.setState({ loading: true });
        fetch(`${API_SPEAKER_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { investors } = data;
                    this.setState({
                        investors: investors,
                        loading: false
                    });
                }
            )
            .catch(
                error => console.log(
                    console.clear()
                )
            )
    }
    handelReLink = link => {
        window.open(link, '_blank');
    }
    componentDidMount = () => {
        this.handelInvestorsFatch();
    }
    
    caruselPrev = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        if(window.navigator.userAgent.indexOf("Edge") > -1){
            elem.scrollLeft=elem.scrollLeft + inter;
        }
        else elem.scrollTo({
            left: elem.scrollLeft + inter,
            behavior: "smooth",
        });
    }
    caruselNext = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        if(window.navigator.userAgent.indexOf("Edge") > -1){
            elem.scrollLeft=elem.scrollLeft - inter;
        }
        else elem.scrollTo({
            left: elem.scrollLeft - inter,
            behavior: "smooth",
        });
    }
    render = () => {
        const { investors } = this.state;
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/investors/investors_name/img/';
        return (
            <div className="upcommingInvestorNew">
                <h2>Meet the right Investor</h2>
                <p>— our previous Investors —</p>
                <div className="left">
                    <div className="upcommingInvestorNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingInvestorImg, 500)}><b /></div>
                    <div className="upcommingInvestorNewImg" ref="upcommingInvestorImg">
                        {
                            investors.map(investor => (
                                <div className="investor" key={investor.id} onClick={() => this.handelReLink(investor.link)}>
                                    <div className="imgBox">
                                        <img src={`${API_IMG_URL}/${investor.img}`} alt="investor" rel="index nofollow noopener nnoreferer" />
                                    </div>
                                    <p className="name">{investor.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="upcommingInvestorNewNext" onClick={() => this.caruselNext(this.refs.upcommingInvestorImg, 500)}><b /></div>
                </div>
                <div className="footter">
                    <a href="https://www.pay.seasidestartupsummit.com/visitor/#investor-pass" target="_blank" rel="noopener noreferrer">Get your Investor Pass</a>
                </div>
            </div>
        )
    }
}
export default Investors;