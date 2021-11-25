

import "./home.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sindebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <Img src=""></Img>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip

                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
             <ul className="sidebarList">
                <li className="sidebarListItem">Life </li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Stlyle</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
             </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOOW US</span>
            <div className="sidebarSocial">
                <i className="sindebarIcon fab fa-facebook-square "></i>
                <i className="sidebarIcon fab fa-twitter -square"></i>
                <i className="sindebarIcon fab fa-pinterest-square"></i>
                <i className="sindebarIcon fab fa-instagram-square"></i>

            </div>
            </div>


        </div>
    )
}