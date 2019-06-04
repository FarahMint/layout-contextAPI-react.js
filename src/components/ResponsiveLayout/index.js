
import { useWindowDimensions } from '../WindowDimensionsProvider';



/** 
 * --1) Get the width using window dimensions.
 * --> If width > breakpoint => render the desktop view. 
 * --> Otherwise => render the mobile view.
*/



const ResponsiveLayout = ({  renderMobile, renderDesktop }) => {
 
  let breakpoint = 767;
  const { width } = useWindowDimensions()
  // console.log(width);
  return (width > breakpoint ? renderDesktop() : renderMobile())
}

export default ResponsiveLayout;