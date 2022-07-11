import "./topbar.css"
// creating topbar
// topLeft is icon creating
// topcenter is home,about,... creating
// topRight search box and picture creating
export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-f"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest-p"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
          className="topImg"
          src="https://media.istockphoto.com/photos/statistics-research-concept-picture-id1196157375?k=20&m=1196157375&s=612x612&w=0&h=UCES529As45bUTjvhBXce6sx-NnmooXb6BrX-wUXFRA=" alt=""/>
          <i className="topSearchIcon fa-brands fa-searchengin"></i>
        </div>
        </div>
  );
}
