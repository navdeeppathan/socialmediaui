import Post from '../post/Post.jsx'
import Share from '../share/share.jsx'
import './feed.css'
import {Posts} from '../../DummyData.js'
function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p} />
        ))}

      </div>
    </div>
  ) 
}

export default feed