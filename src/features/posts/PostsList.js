import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

import { selectAllPosts, fetchPosts, selectPostIds, selectPostById } from './postsSlice'

let PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))

  return (
    <div className="card text-white bg-secondary mb-3">
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
  )
}

export const PostsList = () => {
  const dispatch = useDispatch()
  const orderedPostIds = useSelector(selectPostIds)
  //const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <div className='loader'>Loading...</div>
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (postStatus === 'error') {
    content = <div>{error}</div>
  }

  return (
    <section>
      <h2 className='display-4 mt-3'>Posts</h2>
      {content}
    </section>
  )
}