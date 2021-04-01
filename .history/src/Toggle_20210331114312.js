import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple ofC SVG files we'll use in the design: https://www.flaticon.com
import  MoonIcon  from 'assets/MoonIcon.png';
import SunIcon  from 'assets/SunIcon.png';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;