import React, { createContext, useContext, useState, useEffect } from 'react';

export const WindowDimensionsCtx = createContext(null);

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    // height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        // height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize);
    // remove event listener when the component unmounts
    return () => { window.removeEventListener("resize", handleResize) };
    // By default Effect Hook runs every time the component mounts and again every time it updates. But this is unnecessary in my case. To run the Effect Hook only on mount and unmount, I pass an empty array as the second argument
  }, [])
  // console.log(dimensions);
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}
export default WindowDimensionsProvider;
export const useWindowDimensions = () => useContext(WindowDimensionsCtx)