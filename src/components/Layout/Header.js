import SearchBar from "./SearchBar";
import NavigationAction from "./NavigationAction";

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="Logo" className="header__logo" />
      <SearchBar />
      <NavigationAction />
    </header>
  );
};

export default Header;
