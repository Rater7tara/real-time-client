import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import './NavBar.css';
import { FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navOptions =
    <>
      <Link to="/" className='navbtn  rounded-md  hover:bg-rose-500 font-bold text-white text-center p-3 me-2'>Home</Link>
      <Link to="/alltasks" className='navlink rounded-md  hover:bg-rose-500  font-bold text-white text-center p-3 me-2'>All Tasks</Link>
      {user?.email ? <>
      <Link to="/mytasks" className='navlink rounded-md hover:bg-rose-500  font-bold text-white text-center p-3 me-2'>My Tasks</Link>
      <Link to="/addtasks" className='navlink rounded-md  hover:bg-rose-500  font-bold text-white text-center p-3 me-2'>Add A Task</Link>
      <Link to="" className='navlink rounded-md  hover:bg-rose-500  font-bold text-white text-center p-3 me-2'>Blog</Link>

      </>
             :
            <Link to="/login">
            </Link>
          }
      
    </>



  return (
    <>
      <div className="navbar max-w-screen-2xl fixed z-10 bg-black bg-opacity-20 text-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content  z-[1] mt-2 p-2 shadow bg-base-700 rounded-box w-36 gap-2">
              
              {navOptions}
              
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-xl sm:text-lg">
            <img className='logo' src={logo} alt="" /><span className='text-white font-bold'>FITNESS</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">

          <button className="btn btn-ghost btn-circle hidden sm:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          {

            user?.photoURL ? <img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} /> : <FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
          }
          {user ?

            <button onClick={handleLogOut} className="btn btn-info">Logout</button>

            :
            <Link to="/login">
              <button className="btn btn-info">Login</button>
            </Link>
          }


        </div>
      </div>
    </>
  );
};

export default NavBar;
