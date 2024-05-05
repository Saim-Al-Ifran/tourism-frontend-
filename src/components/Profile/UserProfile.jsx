import React from 'react'

const UserProfile = () => {
  return (
     <>
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" title="koduu" src="https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394665.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714780800&semt=ais" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        {/* <Link to="/profile"> */}
 
          {/* </Link> */}

        <li  ><a>Logout</a></li>
      </ul>
    </div>
     </>
  )
}

export default UserProfile