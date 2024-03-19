import './profile.css'
import Topbar from '../../components/topbar/Topbar.js'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Feed from "../../components/feed/feed.jsx";

function Profile() {
  return (
    <>

        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                <img className='profileUserImg' src="assets/post/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my Friends!</span>
            </div>
                 
            </div>
        <div className="profileRightBottom">
               <Feed/>
               <Rightbar profile/>
        </div>
        </div>
        </div>
    </>
  )
}

export default Profile