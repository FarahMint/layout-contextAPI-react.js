import React from 'react';

import Content from './components/Content';
import WindowDimensionsProvider from './components/WindowDimensionsProvider';
import items from './data.json';
 


/**
 * -- the Provider component appear higher in app render tree than any component that wants to read from its Context for data. 
 * -->(imp so React knows which ctxt value to provide, in case of multiple instances of the same type of Provider rendered in app.)
 */

/**
 * -- only one "resize" event listener active on the page
 * -- will remain active as long as React is rendering App compo
 * --All components inside app have access to the WindowDimensionsProvider’s context
 */

function App() {
  return (
    <WindowDimensionsProvider>   
        <Content items={items} />

  </WindowDimensionsProvider>
  );
}

export default App;
