import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

import { selectAllPosts } from './postsSlice'
export const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <div key={post.id} className="card text-white bg-secondary mb-3">
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text lead">{post.content.substring(0, 100)}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
      <div className="card-footer">
        <Link
          to={`/posts/${post.id}`}
          className='btn btn-primary'>
          View Full Post
        </Link>
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