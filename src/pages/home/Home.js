import './home.css'
import Topbar from '../../components/topbar/Topbar.js'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Feed from "../../components/feed/feed.jsx";

function Home() {
  return (
    <>

        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
    </>
  )
}

export default Home