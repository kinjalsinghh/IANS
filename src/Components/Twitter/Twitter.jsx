import bird from '../Assets/twitter-section.png'
import wishlist from '../Assets/wishlist.png'
import './Twitter.css'
function Twitter(){
    return(
        <div className="twitter">
            <div className="twitter-content">
              <img src={bird}/>
              <div className="twitter-handle">
                <p className='twitter-tag'>IANS</p>
                <p className='handle'>@ians_india</p>
              </div>
              <div className='tweet'>
              <p>#RakeshSachan (@Rakesh_Sachan_),<br/> cabinet minister in the #YogiAdityanath<br/> government.....</p>
              </div>
              <img src={wishlist}/>
            </div>
            <hr/>
            <div className="twitter-content">
            <img src={bird}/>
              <div className="twitter-handle">
                <p className='twitter-tag'>IANS</p>
                <p className='handle'>@ians_india</p>
              </div>
              <div className='tweet'>
              <p>#RakeshSachan (@Rakesh_Sachan_),<br/> cabinet minister in the #YogiAdityanath<br/> government.....</p>
              </div>
              <img src={wishlist}/>
            </div>
            <hr/>
            <div className="twitter-content">
            <img src={bird}/>
              <div className="twitter-handle">
                <p className='twitter-tag'>Trending in Politics</p>
                <p className='handle'>#ShrikantTyagi</p>
              </div>
            </div>
            <hr/>
            <div className="twitter-content">
            <img src={bird}/>
              <div className="twitter-handle">
                <p className='twitter-tag'>Trending in Politics</p>
                <p className='handle'>#BiharPolitics</p>
              </div>
            </div>
            </div>
    )
}
export default Twitter;