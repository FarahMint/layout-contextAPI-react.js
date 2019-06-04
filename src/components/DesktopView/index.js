import React from 'react';
import Tile from '../Tile';
import { useWindowDimensions } from '../WindowDimensionsProvider';

/**
 * can handle width for a minimal change 
 * --> like adding a class - without getting too complex.
 */

const DesktopView = ({ items }) => {
  const { width } = useWindowDimensions();
  // console.log(width);

  const classNaming="tile is-ancestor";
 
  return (
    <div
      // className={"tile is-ancestor "
      //   .concat(width < 1088 ? "is-vertical" : "")}
        className= {width < 2000 ? `${classNaming} is-vertical` : ""}
    >
      {items.map((item, idx) => (
        <Tile
          key={item.title}
          {...item}
        />
      ))}
    </div>
 
  )
}
export default DesktopView