import tv from '../Assets/tv.png'
import drop from '../Assets/down-arr.png'
import './Menu.css'
function Menu(){
    return(
        <div className="menu">
            <div className="menu-top">
                <hr className="dotted"/>
            </div>
            <div className="menu-bottom">
            <div className="live-ians">
                <img src={tv}/>
                <p>Live IANS</p>
            </div>
            <p>NATIONAL</p>
            <p>INTERNATIONAL</p>
            <p>BUSINESS</p>
            <p>ENTERTAINMENT</p>
            <p>SCIENCE/TECH</p>
            <p>SPORTS</p>
            <p>IANS LIFE</p>
            <p>ALL STORIES</p>
            <div className="more">
                <p>MORE</p>
                <img src={drop}/>
            </div>
            </div>
            
        </div>
    )
}
export default Menu;