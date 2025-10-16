import { Link } from "react-router";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { userData } = use(AuthContext);
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src="/firebase-logo.png" className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-8">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about"}>About US</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>
        <div>
          <img src={userData.photoURL} alt="" className="w-[55px]" />
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/login"}>Log in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
