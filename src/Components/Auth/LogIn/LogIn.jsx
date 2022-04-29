import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
    
    return (
        <div>
            
        </div>
    );
};

export default LogIn;