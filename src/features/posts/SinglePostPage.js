import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2 className='display-4'>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2 className='display-4'>{post.title}</h2>
        <hr />
        <p className="lead">{post.content}</p>
        <Link
          to={`/editPost/${postId}`}
          className="btn btn-primary ml-auto"
        >
          Edit Post
        </Link>
      </article>
    </section>
  )
}