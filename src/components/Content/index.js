import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from '../MobileView';
import DesktopView from '../DesktopView';


const Content = ({ items }) => {
//  const breakPointValue = 767;
return(
  <ResponsiveLayout
  //  breakPoint={breakPointValue}
  renderDesktop={() => (
    <DesktopView items={ items} />
  )}
  renderMobile={() => (
    <MobileView items={ items} />
  )}
/>
)

}
export default Content