import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthModal, login } from '../../redux/authSlice';
import './AuthModal.css';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa'; 

const AuthModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isAuthModalOpen);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setIsLogin(true);
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!isLogin && !formData.name.trim()) newErrors.name = 'Name is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      const user = {
        email: formData.email,
        name: isLogin ? formData.email.split('@')[0] : formData.name
      };
      dispatch(login(user));
      localStorage.setItem('budgetbasket_user', JSON.stringify(user));
    } else setErrors(newErrors);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={() => dispatch(closeAuthModal())}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={() => dispatch(closeAuthModal())}>✕</button>
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-input-group">
              <FaUserPlus className="auth-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="auth-error">{errors.name}</span>}
            </div>
          )}

          <div className="auth-input-group">
            <FaEnvelope className="auth-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-input-group">
            <FaLock className="auth-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </div>

          <button type="submit" className="auth-submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;