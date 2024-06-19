import img1 from '../Assets/section5-img1.png'
import img2 from '../Assets/section5-img2.png'
import img3 from '../Assets/section5-img3.png'
import img4 from '../Assets/section5-img4.png'
import img5 from '../Assets/section5-img5.png'
import img6 from '../Assets/section5-img6.png'
import share from '../Assets/section5-sharebtn.png'
import './Section5.css'
function Section5(){
    return(
        <div className="section5">
            <div className="section5-contents">
                <div className="section5-content">
                    <img className='section5-img' src={img1}/>
                    <div className="section5-content-text">
                    <p>Italia Tak Berdaya,<br/> Dihajar Jerman 2-5</p>
                    <p className='content-date'>12 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
                <div className="section5-content">
                    <img className='section5-img' src={img2}/>
                    <div className="section5-content-text">
                    <p>Inggris Jadi Bulan-<br/>bulanan Hungaria</p>
                    <p className='content-date'>12 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
                <div className="section5-content">
                    <img className='section5-img' src={img3}/>
                    <div className="section5-content-text">
                    <p>8 Potret Kemeriahan<br/> PKB 2022, Pawai-IKM</p>
                    <p className='content-date'>8 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
                <div className="section5-content">
                    <img className='section5-img' src={img4}/>
                    <div className="section5-content-text">
                    <p>Italia Tak Berdaya,<br/> Dihajar Jerman 2-5</p>
                    <p className='content-date'>8 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
                <div className="section5-content">
                    <img className='section5-img' src={img5}/>
                    <div className="section5-content-text">
                    <p>Italia Tak Berdaya,<br/> Dihajar Jerman 2-5</p>
                    <p className='content-date'>10 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
                <div className="section5-content">
                    <img className='section5-img' src={img6}/>
                    <div className="section5-content-text">
                    <p>Italia Tak Berdaya,<br/> Dihajar Jerman 2-5</p>
                    <p className='content-date'>10 Foto</p>
                    </div>
                    <div className='share-btn'>
                        <img src={share}/>
                    </div>
                </div>
            </div>
            <button className='section5-button'>View More</button>
        </div>
    )
}
export default Section5;