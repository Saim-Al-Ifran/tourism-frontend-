import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInWithGoogle, signInWithGithub , user ,error } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
 

  const handleSubmit = async (e) => {
    console.log(error); 
    e.preventDefault();

    try {
      await signIn(email, password);
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      toast.error('Invalid user credentials');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      if(!error){
        navigate(location?.state ? location.state : '/');
       }
    } catch (error) {
       console.log('Google login failed');
    }
  };

 

  const handleGithubLogin = async ()=>{
       try {
         await signInWithGithub();
         if(!error){
          navigate(location?.state ? location.state : '/');
         }
         toast.error('Github login failed! auth/account-exists-with-different-credential');
       } catch (error) {
             toast.error('Github login failed');
       }
  }

  return (
    <>
      
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">Don't have any account?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
              <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-xl  text-center">or</h2>

                <button className="btn btn-outline w-full" onClick={handleGoogleLogin}>
                  <i className="fab fa-google"></i> Google
                </button>
 
                <button className="btn btn-outline w-full" onClick={handleGithubLogin}>
                  <i className="fab fa-github"></i> Github
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Login;