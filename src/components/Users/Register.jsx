import { createUser } from '../../api/index.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = ({ setToken, setUser }) => {
  const [registerUser, setRegisterUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterError(null);

    const { firstName, lastName, email, password, confirmPassword } = registerUser;
    if (!firstName || !lastName || !email | !password || !confirmPassword) {
      setRegisterError('Please fill in all fields.');
      return;
    }
    try {
      const response = await createUser(firstName, lastName, email, password, confirmPassword);
      if (!response.token) {
        setRegisterError(response.message);
        return;
      }
      setUser({
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        password: response.password
      })
      setToken(response.token);
      localStorage.setItem('token', response.token);
      navigate('/account');
    } catch (error) {
      console.error(error.message);
      setRegisterError('Failed to register. Please try again.', error.message);
    }
  };

  return (
    <div className='login-register-container'>
      <div className='register-login-header'>
        <h2>Register</h2>
      </div>
      <form onSubmit={handleRegisterSubmit}>
        <div className='register-firstName'>
          <label>
            First Name:&nbsp;
            <input 
              className='firstName'
              name='firstName'
              type='text'
              value={registerUser.firstName}
              onChange={(e) => setRegisterUser(prev => ({
                ...prev,
                [e.target.name]: e.target.value })
              )}
              required
              />
          </label>
        </div>
        <br />
        <div className='register-lastName'>
          <label>
            Last Name:&nbsp;
            <input 
              className='lastName'
              name='lastName'
              type='text'
              value={registerUser.lastName}
              onChange={(e) => setRegisterUser(prev => ({
                ...prev,
                [e.target.name]: e.target.value })
              )}
              required
              />
          </label>
        </div>
        <br />
        <div className='register-username'>
          <label>
            Username:&nbsp;
            <input
              className='form-username'
              name='username'
              type="text"
              value={registerUser.username}
              onChange={(e) => setRegisterUser(prev => ({
                ...prev,
                [e.target.name]: e.target.value })
              )}
              required
              />
          </label>
        </div>
        <br />
        <div className='register-email'>
          <label>
            Email Address:&nbsp;
            <input
              className='form-email'
              name='email'
              type="text"
              value={registerUser.email}
              onChange={(e) => setRegisterUser(prev => ({
                ...prev,
                [e.target.name]: e.target.value })
              )}
              required
              />
          </label>
        </div>
        <br />
        <div className='register-password'>
          <label>Password:&nbsp;
            <input
              className='form-password'
              name='password'
              type='password'
              required
              minLength={8}
              value={registerUser.password}
              onChange={e => setRegisterUser(prev => ({
                  ...prev,
                  [e.target.name]: e.target.value})
              )}
            />
          </label>
        </div>
        <br />
        <div className='register-password'>
          <label>Confirm Password:&nbsp;
            <input
              className='form-password'
              name='confirmPassword'
              type='password'
              required
              minLength={8}
              value={registerUser.confirmPassword}
              onChange={e => setRegisterUser(prev => ({
                  ...prev,
                  [e.target.name]: e.target.value})
              )}
            />
          </label>
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
      {registerError && <p style={{ color: 'red' }}>{registerError}</p>}
    </div>
  );
};

export default Register;