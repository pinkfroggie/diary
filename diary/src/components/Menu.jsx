import React from 'react'

const Menu = () => {
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
      ];

    return (
    <div className='menu'>
      <h1>Other entries</h1>
      {posts.map(post=>(
        <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
