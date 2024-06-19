import main from '../Assets/section6-main.png'
import playbtn from '../Assets/section3-playbtn.png'
import img1 from '../Assets/section6-img1.png'
import img2 from '../Assets/section6-img2.png'
import img3 from '../Assets/section6-img3.png'
import img4 from '../Assets/section6-img4.png'
import img5 from '../Assets/section6-img5.png'
import img6 from '../Assets/section6-img6.png'
import './Section6.css'
function Section6(){
    return(
        <div className="section6">
            <div className="top-menu">
                <p className='menu-heading'>IANS SPORTS NEWS</p>
            </div>
            <div className="section6-middle">
                <div className="section6-middle-left">
                   <img className="middle-main-img"src={main}/>
                    <img className='plybtn' src={playbtn}/>
                </div>
                <div className="section6-middle-right">
                    <p className='section6-indo'>INDO</p>
                    <p className='section6-middle-heading'>Isro launches 104 satellites in a single<br/> mission to create world record</p>
                    <p className='section6-middle-date'>june 14, 2022</p>
                    <button className='section6-middle-button'>Watch Video</button>
                </div>
            </div>
            <div className="section6-bottom">
                <div className="section6-bottom-content">
                    <img src={img1}/>
                    <p className='section6-bottom-heading'>Andhra Pradesh: Police Constable<br/> stabbed to death, probe underway</p>
                    <p className='section6-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section6-bottom-content">
                    <img src={img2}/>
                    <p className='section6-bottom-heading'>List of Applications Most Often Used<br/> by Indonesians</p>
                    <p className='section6-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section6-bottom-content">
                    <img src={img3}/>
                    <p className='section6-bottom-heading'>Andhra Pradesh: Police Constable<br/> stabbed to death, probe underway</p>
                    <p className='section3-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section6-bottom-content">
                    <img src={img4}/>
                    <p className='section6-bottom-heading'>Make Hungry: Very Unique! There's<br/> Red Chicken Noodles in the Sunter </p>
                    <p className='section6-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section6-bottom-content">
                    <img src={img5}/>
                    <p className='section6-bottom-heading'>Amber Heard spotted with pal who was<br/> barred from Johnny Depp</p>
                    <p className='section6-bottom-date'>Juni 13, 2022</p>
                </div>
                <div className="section6-bottom-content">
                    <img src={img6}/>
                    <p className='section6-bottom-heading'>Bikin Laper: Unik Banget! Ada Bakmi<br/> Ayam Merah di Kawasan Sunter</p>
                    <p className='section6-bottom-date'>Juni 13, 2022</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Section6;