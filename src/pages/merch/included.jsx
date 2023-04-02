import React from 'react';
import PopupComingSoon from './included_popup_soon.jsx';
import PopupSuggestion from './included_popup_suggest.jsx';
import { importAll } from '../../helper.js';
import { Link } from 'react-router-dom';

const items = importAll(require.context('./img/items', false, /\.(png|jpe?g|svg)$/));
import img1_1 from './img/items/1_1.png';
import img1_2 from './img/items/1_2.png';
import img1_3 from './img/items/1_3.png';
import img1_4 from './img/items/1_4.png';
import img1_1_0 from './img/items/1_1_0.png';
import img1_2_0 from './img/items/1_2_0.png';
import img1_3_0 from './img/items/1_3_0.png';
import img1_4_0 from './img/items/1_4_0.png';
import img2_1 from './img/items/2_1.png';
import img2_2 from './img/items/2_2.png';
import img3_1 from './img/items/3_1.png';
import img3_2 from './img/items/3_2.png';
import img4_1 from './img/items/4_1.png';
import img4_2 from './img/items/4_2.png';
import img4_3 from './img/items/4_3.png';
import img5_1 from './img/items/5_1.png';
import img5_2 from './img/items/5_2.png';
import img5_3 from './img/items/5_3.png';
import img6_1 from './img/items/6_1.png';
import img6_2 from './img/items/6_2.png';
import img7_1 from './img/items/7_1.png';
import img7_2 from './img/items/7_2.png';
import img8_1 from './img/items/8_1.png';
import img8_2 from './img/items/8_2.png';

class Included extends React.Component{
    constructor(){
        super();
        this.state={
            popupComingSoon: false,
            popupSuggestion: false,
            itemStructure:{
                '1_1':{
                    '#454249':[img1_1, img1_1_0],
                    '#F1A61E':[img1_2, img1_2_0],
                    '#E94641':[img1_3, img1_3_0],
                    '#1D2B4D':[img1_4, img1_4_0],
                },
                '2_1':{
                    '#F1A61E':[img2_1,img2_1],
                    '#2E3C5A':[img2_2,img2_2],
                },
                '3_1':{
                    '#2E3C5A':[img3_1,img3_1],
                    '#F1A61E':[img3_2,img3_2],
                },
                '4_1':{
                    '#00D3B2':[img4_1,img4_1],
                    '#F1A61E':[img4_2,img4_2],
                    '#6927C1':[img4_3,img4_3],
                },
                '5_1':{
                    '#BECCD8':[img5_1,img5_1],
                    '#FFD994':[img5_2,img5_2],
                    '#5C6082':[img5_3,img5_3],
                },
                '6_1':{
                    'bag1':[img6_1,img6_1],
                    'bag2':[img6_2,img6_2],
                },
                '7_1':{
                    '#DC4D00':[img7_1,img7_1],
                    '#F1A61E':[img7_2,img7_2],
                },
                '8_1':{
                    '#AA1535':[img8_1,img8_1],
                    '#4F4F4F':[img8_2,img8_2],
                },
            },
            itemActive:['','','','','','','',''],
            itemActiveColor:[
                '#454249',
                '#F1A61E',
                '#2E3C5A',
                '#00D3B2',
                '#BECCD8',
                'bag1',
                '#DC4D00',
                '#AA1535',
            ]
        }
    }
    handelPopupComingSoon=()=>{
        this.setState({
            popupComingSoon:!this.state.popupComingSoon
        })
    }
    handelPopupSuggestion=()=>{
        this.setState({
            popupSuggestion:!this.state.popupSuggestion
        })
    }

    setColor=(e,i,color,img)=>{
        let {itemActive,itemStructure,itemActiveColor} = this.state;
        itemActive[i]=itemStructure[img][color][0];
        itemActiveColor[i]=color;
        this.setState({
            itemActive,
            itemActiveColor
        });
        const parent = e.target.parentNode;
        const childe = parent.children
        for (let item of childe) {
            item.classList.remove('active')
        }
        e.target.classList.add('active');
    }
    setSide=(i,img)=>{
        let {itemActive,itemStructure,itemActiveColor} = this.state;
        let color = itemActiveColor[i];
        itemActive[i]=itemStructure[img][color][1];
        this.setState({
            itemActive,
        })
    }
    removeSide=(i,img)=>{
        let {itemActive,itemStructure,itemActiveColor} = this.state;
        let color = itemActiveColor[i];
        itemActive[i]=itemStructure[img][color][0];
        this.setState({
            itemActive,
        })
    }
    render=()=>{
        const {itemStructure,itemActive} = this.state;
        return(
            <>
            <PopupComingSoon open={this.state.popupComingSoon} handeling={this.handelPopupComingSoon}/>
            <PopupSuggestion open={this.state.popupSuggestion} handeling={this.handelPopupSuggestion}/>
            <div className="included">
                <div className="row1">
                    <h3>What’s included?</h3>
                    <button onClick={()=>this.handelPopupSuggestion()}>Suggest Your idea</button>
                </div>
                <div className="row2">
                    {Object.keys(itemStructure).map((keyName, i) => (
                        <div key={i}>
                            <img 
                                src={!itemActive[i]?items[`${keyName}.png`]:`${itemActive[i]}`} 
                                alt="items"
                                onMouseOver={()=>this.setSide(i,keyName)} 
                                onMouseOut={()=>this.removeSide(i,keyName)}
                            />
                            <div className='colorBox'>
                                {Object.keys(itemStructure[keyName]).map((color, j) => (
                                    <div 
                                        key={j} 
                                        style={
                                            color.charAt(0)=="#"
                                            ?{backgroundColor:color}
                                            :{backgroundImage:`url(${require(`./img/items/icon/${color}.png`)})`}
                                        }
                                        onClick={(e)=>this.setColor(e,i,color,keyName)}
                                        className = {`${j===0?'active':''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row3">
                    <a href="https://buy.am/hy/seaside-startup-summit" target="_blank">Shop in Armenia</a>
                    <button onClick={()=>this.handelPopupComingSoon()}>Global Shopping</button>
                </div>
            </div>
            </>
        )
    }
}

export default Included;