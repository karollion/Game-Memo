import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/userRedux';

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'DELETE',
    };

    fetch(`${API_URL}/auth/logout`, options)
        .then(res => {
          dispatch(logOut());
          navigate('/');
        });
        // eslint-disable-next-line
  }, [dispatch]);

  return null;
};

export default Logout;