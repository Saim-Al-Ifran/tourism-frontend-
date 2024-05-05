import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [photoUrl, setPhotoUrl] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  return (
     <>
       <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4 text-center">Register Here</h2>
      <form  >
        <div className="form-control my-4">
          <label htmlFor="photoUrl" className="label">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered"
              required
              
            />

       <span
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="kodu"
        >
          {showPassword ? <i class="fa-solid fa-eye"></i> :<i class="fa-solid fa-eye-slash"></i>}
        </span>     
             
 
        </div>
        <label className="label">
                 <Link to="/login" className="label-text-alt link link-hover">Already Have account?</Link>
                   
       </label>
        <div className="form-control my-4">
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </div>
 
         </form>
    </div>
     </>
  )
}

export default Register