import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state => selectUserById(state, userId))
  return (
    <div className='text-right font-italic'>
      <small className='text-body'>
        by {author ? author.name : 'unknown author'}
      </small>
    </div>
  )
}
