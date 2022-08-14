import './PageNotFound.css'
import React from 'react';

//Note - add back to home page rerouting

const PageNotFound = () => {

    return (
    
    <div>
    <p className="pageNotFound">404 - Page not found</p>
    <h1>Sorry this page doesn't exist</h1>
    <p>The page you are looking for does not exist. 
    It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
    {/* Go Back Button */}
    <button 
        
        type="submit" 
        className="button">Back to Home Page
    </button>
    </div>
    )
}

export default PageNotFound;