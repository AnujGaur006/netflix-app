import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="absolute px-16 py-2 bg-gradient-to-b black from-black z-10" >
            <img className="w-56 bg-cover" src={NETFLIX_LOGO} alt='logo'/>
        </div>
    );
};

export default Header;