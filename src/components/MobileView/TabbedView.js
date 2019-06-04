import React, { useState } from 'react';


/**
 * useState => keep track of the active tab, 
 * -- > so it receives proper styles 
 * -- > and we know what to render in the content box.
 */

const TabbedView = ({  items, renderItem }) => {
  
  const [active, setActive] = useState(0)
  return (
    <div className='tabs-container'>
      <nav className='tabs is-centered'>
        <ul>
          {items.map(({ title }, idx) => (
            <li
              className={idx === active ? 'is-active' : ''}
              key={title}
            >
              <a href="/#" onClick={() => setActive(idx)}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className='content'>
          {items[active].content}
        </p>
      </div>
    </div>
  )
}
export default TabbedView