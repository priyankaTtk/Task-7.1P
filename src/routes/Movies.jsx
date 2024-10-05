import React, {useState} from 'react';
import Header from '../Header'
import {Outlet} from "react-router-dom"
function  Movies() {
    
    return (
      
      <div>
        <Header 
          text = "Movies"
        />
      </div>
      
    );
}
export default Movies;
