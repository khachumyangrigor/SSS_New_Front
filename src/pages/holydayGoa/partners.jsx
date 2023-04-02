import React from 'react';
import  './style.css';

class Partners extends React.Component{
    render=()=>{
        return(
            <>
            <div className="partners organizers">
                <h3>Co-Organizers</h3>
                <div className="row r50">
                    <div><a href="https://startuparmenia.am" target="_blank" ref="noreferrer noopener"><img src={require('./partners/startupArmenia.png')} alt="startupArmenia" /></a></div>
                    <div><a href="https://www.amtz.in/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/AMTZ.png')} alt="AMTZ" /></a></div>
                </div>
            </div>
            <div className="partners">
                <h3>Sponsors and Partners</h3>
                <div className="row r25">
                    <div><a href="https://www.almabay.com" target="_blank" ref="noreferrer noopener"><img src={require('./partners/almabay.png')} alt="almabay" /></a><span>Main Indian Partner</span></div>
                    <div><a href="https://www.fastex.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/fasttex.png')} alt="fasttex" /></a><span>General Partnerr</span></div>
                    <div><a href="https://imnairi.am/?lng=en" target="_blank" ref="noreferrer noopener"><img src={require('./partners/nairi.png')} alt="nairi" /></a><span>Insurance Partner</span></div>
                    <div><a href="https://shtigen.com/en/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/shigen.png')} alt="shigen" /></a><span>Renewable Partnerr</span></div>
                    <div><a href="https://triples.vc/en" target="_blank" ref="noreferrer noopener"><img src={require('./partners/3s.png')} alt="3s" /></a><span>Venture Partner</span></div>
                    
                    <div><a  target="_blank" ref="noreferrer noopener"><img src={require('./partners/gtb.png')} alt="PMI" /></a><span></span></div>
                    <div><a href="https://www.facebook.com/impalacreativeagency" target="_blank" ref="noreferrer noopener"><img src={require('./partners/ipala.png')} alt="ipala" /></a><span></span></div>
                    <div><a href="http://tumo.am/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/tumo.png')} alt="tumo" /></a><span></span></div>
                    <div><a href="https://www.bogossi.am/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/boggosi.png')} alt="boggosi" /></a><span></span></div>
                    <div><a href="https://earlyone.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/earyone.png')} alt="earyone" /></a><span></span></div>
                    

                    <div><a href="https://www.placecom.co/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/placecom.png')} alt="concplacecomern_dialog" /></a><span></span></div>
                    <div><a href="https://www.qatarairways.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/qatar.png')} alt="qatar" /></a><span></span></div>
                    <div><a href="https://www.flydubai.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/flydubai.png')} alt="flydubai" /></a><span></span></div>
                    <div><a href="https://www.radissonhotels.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/redisson.png')} alt="redisson" /></a><span></span></div>
                    <div><a href="https://www.ggtaxi.com" target="_blank" ref="noreferrer noopener"><img src={require('./partners/gg.png')} alt="gg" /></a><span></span></div>
                   
                    <div><a href="http://www.levontravel.am/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/levontrevel.png')} alt="levontrevel" /></a><span></span></div>
                    <div><a href="https://tactun.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/actual.png')} alt="actual" /></a><span></span></div>
                    <div><a href="" target="_blank" ref="noreferrer noopener"><img src={require('./partners/womanAvatar.png')} alt="womanAvatar" /></a><span></span></div>
                    <div><a href="https://www.inqinnovation.com/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/inq.png')} alt="inq" /></a><span></span></div>
                    <div><a href="https://www.openstartups.net/en/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/100os.png')} alt="100os" /></a><span></span></div>

                    <div><a href="https://app.karas.am/hy/" target="_blank" ref="noreferrer noopener"><img src={require('./partners/karas.png')} alt="karas" /></a><span></span></div>
                </div>
            </div>
            </>
        )
    }
}

export default Partners;