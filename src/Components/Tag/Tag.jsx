import './Tag.css'
import tag from '../Assets/tag.png'
function Tag(prop){
    return(
        <div className="tag">
            <hr className="top-hr"></hr>
            <hr className="middle-hr"/>
            <hr className="bottom-hr"/>
            <img src={tag}/>
            <div className="tag-text">
                    {prop.value}
            </div>
        </div>
    )
}
export default Tag;