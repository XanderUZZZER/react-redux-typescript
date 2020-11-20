import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId))
  return (
    <div className='text-right font-italic'>
      <small className='text-body'>
        by {author ? author.name : 'unknown author'}
      </small>
    </div>
  )
}
