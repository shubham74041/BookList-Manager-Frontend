import { useNavigate } from "react-router-dom";

const NavBar = ({ callbackFunc }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="NavBar-box">
      <div className="search-box-main">
        <input
          className="search-box"
          placeholder="Search"
          type="search"
          onChange={(e) => {
            callbackFunc(e.target.value.toUpperCase());
          }}
        />
      </div>
      <div className="button-main-box">
        <button className="button-logOut" onClick={handleSubmit}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavBar;
