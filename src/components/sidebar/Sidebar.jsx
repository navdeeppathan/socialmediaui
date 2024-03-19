import { Bookmark, Chat,  Event,  Groups,  HelpOutline,  PlayCircleFilledRounded, RssFeed, School, WorkOutline } from '@mui/icons-material'
import './sidebar.css'
import {Users} from '../../DummyData'
import CloseFriend from '../CloseFriend/CloseFriend'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItmeText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItmeText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledRounded className='sidebarIcon' />
              <span className="sidebarListItmeText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Groups className='sidebarIcon'/>
              <span className="sidebarListItmeText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className='sidebarIcon'/>
              <span className="sidebarListItmeText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon'/>
              <span className="sidebarListItmeText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon'/>
              <span className="sidebarListItmeText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className='sidebarIcon'/>
              <span className="sidebarListItmeText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className='sidebarIcon'/>
              <span className="sidebarListItmeText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className='sidebarHr' />
          <ul className="sidebarFriendList">
           {Users.map((u)=>(
            <CloseFriend key={u.id} user={u}/>
           ))}
          </ul>
      </div>
      </div>
  )
}

export default Sidebar