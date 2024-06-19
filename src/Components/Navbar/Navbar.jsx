import face from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import insta from '../Assets/insta.png'
import blank from '../Assets/blank-circle.png'
import weather from '../Assets/weather.png'
import explore from '../Assets/explore.png'
import search from '../Assets/search.png'
import playstore from '../Assets/playstroe.png'
import ios from '../Assets/ios.png'
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-top">
                <div className="social-handle">
                    <p>FOLlOW US</p>
                    <img src={face}/>
                    <img src={insta}/>
                    <img src={twitter}/>
                    <img src={blank}/>
                    <img src={blank}/>
               </div>
              <div className="weather">
                <p>New delhi 32</p>
                <img src={weather}/>
              </div>
              <div className="signin">
                <p>WELCOME GUEST</p>
                <div className="signin-logo">
                    <img src={blank}/>
                    <p>SIGN IN</p>
                </div>
              </div>
            </div>
            <hr className='dotted'/>
            <div className="navbar-bottom">
                 <div className="navbar-menu">
                     <div className="explore">
                        <img src={explore}/>
                        <p>Explore</p>
                     </div>
                     <div className="search">
                        <img src={search}/>
                        <p>Search</p>
                     </div>
                 </div>
                 <div className="navbar-heading">
                     <p className='navbar-main-heading'>News Service</p>
                     <hr/>
                     <div className="navbar-date">
                        <p>8th aug 2023</p>
                     </div>
                 </div>
                 <div className="navbar-download">
                    <div className="navbar-download-btns">
                        <img src={playstore}/>
                        <img src={ios}/>
                    </div>
                    <button>Download The IANS app</button>
                 </div>
            </div>
            <hr className='dotted'/>
        </div>
    )
}
export default Navbar;