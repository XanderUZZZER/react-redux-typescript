import React from 'react'
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="btn btn-primary mb-2 rounded-0"
        onClick={() => dispatch(
          reactionAdded({
            postId: post.id,
            reaction: name
          })
        )}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div className='d-flex justify-content-between btn-group'>{reactionButtons}</div>
}