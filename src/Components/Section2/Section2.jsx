import img11 from '../Assets/section2-1-1.png'
import img12 from '../Assets/section2-1-2.png'
import img13 from '../Assets/section2-1-3.png'
import img14 from '../Assets/section2-1-4.png'
import img21 from '../Assets/section2-2-1.png'
import img22 from '../Assets/section2-2-2.png'
import img23 from '../Assets/section2-2-3.png'
import img24 from '../Assets/section2-2-4.png'
import './Section2.css'
function Section2(){
    return(
        <div className="section2">
            <div className="section2-content">
               <div className="section2-heading">
                <div className='yellow-box'/>
                <p>YESTERDAY <span className='heading-bold'>NEWS</span></p>
               </div>
               <div className="section2-content-box">
                <div className='section2-content-div'>
                  <img src={img11}/>
                  <p>WATCH: Nayanthara's wedding <br/>documentary teaser out</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img12}/>
                  <p>Delhi Chief Minister Arvind Kejriwal to<br/> visit North Gujarat on August 10</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img13}/>
                  <p>China asked people to provide info on<br/> those not getting tested</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img14}/>
                  <p>Hasil Indonesia Open 2022: Ahsan/<br/>Hendra Tersisih di Babak Pertama</p>
                </div>
               </div>
               <div className='see-more'>
                <hr />
                <p>See More</p>
               </div>
            </div>
            <div className="section2-content">
            <div className="section2-heading">
                <div className='yellow-box'/>
                <p>WEEKLY <span className='heading-bold'>TRENDING</span></p>
               </div>
               <div className="section2-content-box">
                <div className='section2-content-div'>
                  <img src={img21}/>
                  <p>JD(U) MPs, MLAs want to quit BJP-<br/>led NDA alliance, says Nitish Kumar</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img22}/>
                  <p>Jasprit Bumrah congratulates Kieron <br/> Pollard on his 600th T20 appeara</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img23}/>
                  <p>Bukan Nakut-nakutin, Krisis Global <br/> Benar Terjadi, Ini Buktinya</p>
                </div>
                <div className='section2-content-div'>
                  <img src={img24}/>
                  <p>Hasil Indonesia Open 2022: Ahsan/<br/>Hendra Tersisih di Babak Pertama</p>
                </div>
               </div>
               <div className='see-more'>
                <hr />
                <p>See More</p>
               </div>
            </div>
            <div className="section2-content">
            <div className="section2-heading">
                <div className='yellow-box'/>
                <p>TOP <span className='heading-bold'>TEN NEWS</span></p>
               </div>
               <div className="section2-content-box">
                <div className='section2-content3-div'>
                  <p className='number'>1</p>
                  <p className='div-heading'>Probe against Pakistani<br/> charities launched in<br/> UK in case related....</p>
                </div>
                <div className='section2-content3-div'>
                  <p className='number'>2</p>
                  <p className='div-heading'>Indian wrestling stars<br/> receive warm welcome<br/> after successful CWG...</p>
                </div>
                <div className='section2-content3-div'>
                  <p className='number'>3</p>
                  <p className='div-heading'>Probe against Pakistani<br/> charities launched in<br/> UK in case related....</p>
                </div>
               </div>
               <div className='see-more'>
                <hr />
                <p>See More</p>
               </div>
            </div>

        </div>
    )
}
export default Section2;