import main from '../Assets/section3-main-img.png'
import playbtn from '../Assets/section3-playbtn.png'
import img1 from '../Assets/section3-img1.png'
import img2 from '../Assets/section3-img2.png'
import img3 from '../Assets/section3-img3.png'
import img4 from '../Assets/section3-img4.png'
import img5 from '../Assets/section3-img5.png'
import img6 from '../Assets/section3-img6.png'
import './Section3.css'
function Section3(){
    return(
        <div className="section3">
            <div className="top-menu">
                <p className='menu-heading'>TOP VIDEOS</p>
                <div className='menu-list'>
                  <p className='bold-list'>Trending</p>   
                  <p>News</p>  
                  <p>Entertainment</p> 
                  <p>Celebs</p>
                  <p>Movie</p>  
                  <p>Lifestyle</p> 
                  <p>Sports</p>
                  <p>Tech</p> 
                  <p>Business</p> 
                  <p>Auto</p>                          
                </div>
            </div>
            <div className="section3-middle">
                <div className="section3-middle-left">
                   <img className='middle-main-img' src={main}/>
                    <img className="plybtn"src={playbtn}/>
        
                </div>
                <div className="section3-middle-right">
                    <p className='section3-indo'>INDO</p>
                    <p className='section3-middle-heading'>Isro launches 104 satellites in a single<br/> mission to create world record</p>
                    <p className='section3-middle-date'>june 14, 2022</p>
                    <button className='section3-middle-button'>Video Lainnya</button>
                </div>
            </div>
            <div className="section3-bottom">
                <div className="section3-bottom-content">
                    <img src={img1}/>
                    <p className='section3-bottom-heading'>Andhra Pradesh: Police Constable<br/> stabbed to death, probe underway</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section3-bottom-content">
                    <img src={img2}/>
                    <p className='section3-bottom-heading'>List of Applications Most Often Used<br/> by Indonesians</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section3-bottom-content">
                    <img src={img3}/>
                    <p className='section3-bottom-heading'>Andhra Pradesh: Police Constable<br/> stabbed to death, probe underway</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section3-bottom-content">
                    <img src={img4}/>
                    <p className='section3-bottom-heading'>Make Hungry: Very Unique! There's<br/> Red Chicken Noodles in the Sunter </p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section3-bottom-content">
                    <img src={img5}/>
                    <p className='section3-bottom-heading'>Amber Heard spotted with pal who was<br/> barred from Johnny Depp</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section3-bottom-content">
                    <img src={img6}/>
                    <p className='section3-bottom-heading'>Bikin Laper: Unik Banget! Ada Bakmi<br/> Ayam Merah di Kawasan Sunter</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Section3;