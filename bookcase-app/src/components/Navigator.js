import { Link } from "react-router-dom";

export const Nav = () => {

    function setTitle(title){
        document.title = title
    }

  return (
    <div className="nav">
     
      <div className="nav_link">
        <Link onClick={() => setTitle("Search")} to="/search">Search</Link>
      </div>
      <div className="nav_link">
        <Link onClick={() => setTitle("About Us")} to="/aboutUs">About us</Link>
      </div>
      <div className="nav_link">
        <Link onClick={() => setTitle("Bookcase")} to="/bookcase">Bookcase</Link>
      </div>
    </div>
  );
};