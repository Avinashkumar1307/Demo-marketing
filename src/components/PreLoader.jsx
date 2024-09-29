import React, { useEffect } from "react";
import './preloader.css'
import { preLoaderAnim } from "../animations";
import preloaderAnim from '../assets/preloaderAnim.gif'



const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <div className="preloader">
      <div className="texts-container">
        <span>
          <img src={preloaderAnim} alt="loading..." />
        </span>
        <br />
        <span>
            ZarvisGenix
        </span>
        <span>
          - loading
        </span>
      </div>
      </div>
    </>
    
    
  );
};

export default PreLoader;