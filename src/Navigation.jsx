import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
      <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <Link to='/' className='navbar-brand brand'>Fairygodboss</Link>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/posts' className='nav-link'>Posts <span className='sr-only'>(current)</span></Link>
          </li>
          <li className='nav-item'>
            <Link to='/create-post' className='nav-link active'>Create new post</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}