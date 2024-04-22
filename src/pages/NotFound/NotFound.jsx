import React from "react";
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>

      <div class="error-container">
        <h1 class="error-code level-1">404</h1>
        <p class="error-message level-4">Oops! Page not found.</p>
        <p class="error-description">The requested page does not exist. Please check the URL or go back to the homepage.</p><Link class="primary-btn m-auto" to="/"><span class="btn-txt">Go to Homepage</span></Link>
      </div>
    </>
  )
};

export default NotFound;
