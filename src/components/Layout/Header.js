import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="Logo" className="header__logo" />
      <SearchBar />
      <Navigation />
    </header>
  );
};

export default Header;
