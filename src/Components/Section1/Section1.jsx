import image from '../Assets/section1-modi.png'
import img1 from '../Assets/section1-img1.png'
import img2 from '../Assets/section1-img2.png'
import img3 from '../Assets/section1-img3.png'
import './Section1.css'
function Section1(){
    return(
        <div className="section1">
            <div className="section1-left">
               <img src={image}/>
               <div className='section1-left-text'>
                <div className='text-date'>
                    <p>Published on Aug 08, 2022 04:42 PM IST</p>
                    <p>PRIME MINISTER</p>
                </div>
               <p className='section1-left-heading'>'Fortunate to work with you…': PM's farewell speech to VP Naidu|<br/> Top 5 quotes</p>
               </div>
               <p className='section1-left-subheading'><span className='span-section1'>Jakarta - LINE</span> Prime minister Narendra Modi on Monday delivered a farewell speech for<br/> the outgoing vice president and Rajya Sabha chairman Venkaiah Naidu...</p>
            </div>
            <div className="section1-right">
                <div className='right-content'>
                    <div className="right-content-text">
                       <p className='section1-heading'>PV Sindhu saunters to maiden individual <br/>CWG gold, completes hat-trick of medals</p>
                       <p className='section1-subheading'><span className='span-section1'>Commonwealth Games</span> India's PV Sindhu beat the <br/>2014 Commonwealth Games champion 21-15, 21-13.....</p>
                    </div>
                    <img src={img1}/>
                </div>
                <hr className='section1-hr'/>
                <div className='right-content'>
                    <div className="right-content-text">
                       <p className='section1-heading'>CHSE Odisha Board Class 12 Arts Result<br/> 2022: 82.10 % pass CHSE Odisha result</p>
                       <p className='section1-subheading'><span className='span-section1'>Education NEWS </span>- CHSE Odisha Class 12 Arts Result<br/> 2022 released today, August 8. 82.10 percent.....</p>
                    </div>
                    <img src={img2}/>
                </div>
                <hr className='section1-hr'/>
                <div className='right-content'>
                    <div className="right-content-text">
                       <p className='section1-heading'>'This is Ratan Tata': Woman shares how a <br/>call changed her startup's fortune</p>
                       <p className='section1-subheading'><span className='span-section1'>Trending </span>- Aditi Bhosale Walunj, in a LinkedIn post,<br/> outlined how she received the call from Ratan Tata,</p>
                    </div>
                    <img src={img3}/>
                </div>
                <button>View More</button>
            </div>
        </div>
    )
}
export default Section1;