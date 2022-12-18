import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts =[
    {
      id: 1,
      title: "lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      title: "lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      title: "lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className="content">
              <Link className='link' to={'/post/${post.id}'}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>read more</button>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Home