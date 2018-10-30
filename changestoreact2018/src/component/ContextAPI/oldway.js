import React, { Component, useContext } from 'react';

// this way for context API uses function components, You can use class but there is another way which will be in this App
export default function context( props ) {
    const theme = useContext(ThemeContext);
  
    return (
      <div>
        
      </div>
    )
  
}
