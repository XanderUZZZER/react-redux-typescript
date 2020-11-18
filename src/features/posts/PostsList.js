import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <div key={post.id} className="card text-white bg-secondary mb-3">
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text lead">{post.content.substring(0, 100)}</p>
        <Link
          to={`/posts/${post.id}`}
          className='btn btn-primary'
        >View Post</Link>
      </div>
    </div>
  ))

  return (
    <section>
      <h2 className='display-4 mt-3'>Posts</h2>
      {renderedPosts}
    </section>
  )
}