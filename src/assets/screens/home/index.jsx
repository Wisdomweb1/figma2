import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p></p>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/course">Course</Link>
      <Link className='link' to="/monitors">Monitors</Link>
      <Link className='link' to="/testimonials">Testimonials</Link>
      <Link className='link' to="/blog">Blog</Link>
    </div>
  )


}



export default Home