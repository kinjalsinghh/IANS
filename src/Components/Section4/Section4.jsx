import img1 from '../Assets/section4-img1.png'
import img2 from '../Assets/section4-img2.png'
import img3 from '../Assets/section4-img3.png'
import img4 from '../Assets/section4-img4.png'
import './Section4.css'
function Section4(){
    return(
        <div className="section4">
            <hr/>
           <div className="section4-top">
            <p><span>FEATURED</span> Mahashivratri symbolizes a union of divinity with a purpose of overcoming darkness and injustice.</p>
           </div>
           <div className="contents-section4">
            <div className="content-section4">
                <img className='section4-content-img' src={img1}/>
                <div className="content-section4-text">
                    <p>Women Do Like to Compete<br/> 
                    Against Themselves</p>
                </div>
            </div>
            <div className="content-section4">
                <img src={img2}/>
                <div className="content-section4-text">
                    <p>Vijay Mallya, the fugitive<br/> 
                    supposed to be part of </p>
                </div>
            </div>
            <div className="content-section4">
                <img src={img3}/>
                <div className="content-section4-text">
                    <p>Women Do Like to Compete<br/> 
                    Against Themselves</p>
                </div>
            </div>
            <div className="content-section4">
                <img src={img4}/>
                <div className="content-section4-text">
                    <p>Women Do Like to Compete<br/> 
                    Against Themselves</p>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Section4;