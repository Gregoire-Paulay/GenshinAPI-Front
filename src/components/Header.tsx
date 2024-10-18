import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <nav className="headerNav">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="https://res.cloudinary.com/dy2ayuond/image/upload/v1718119694/Genshin/Logo.webp"
              alt="logo"
            />
          </div>
          <div>
            <ul
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </ul>

            <ul
              onClick={() => {
                navigate("/About");
              }}
            >
              À propos
            </ul>

            <ul
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
