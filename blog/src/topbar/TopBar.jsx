import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">l</div>
            <i className="topIcon fab fa-facebook-f"></i>
            
            <i className=" topIcon fab fa-twitter-square"></i>
            
            <i className=" topIcon fab fa-pinterest-square"></i>
            
            <i className="topIcon fab fa-instagram-square"></i>
            



            <div className="topCenter">
                <ul className="toplist">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>

            </div>
            <div className="topRight">
                <img  className="topImg"
                src="" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}