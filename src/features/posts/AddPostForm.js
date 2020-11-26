import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';


export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewPost({ title, content, user: userId })
        )
        unwrapResult(resultAction)
        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error('Failed to save the post: ', error)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <form>
      <h2>Add a New Post</h2>

      <div className="form-group">
        <label htmlFor="postTitle">Post title</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          className="form-control"
          value={title}
          onChange={onTitleChanged}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="postAuthor">Author:</label>
        </div>
        <select
          className="custom-select"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}>
          <option value="">...select</option>
          {usersOptions}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postContent">Post content:</label>
        <textarea
          name="postContent"
          id="postContent"
          className="form-control"
          rows='3'
          value={content}
          onChange={onContentChanged}
        />
      </div>

      <div className='d-flex'>
        <button
          type="button"
          className="btn btn-primary ml-auto"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </div>
    </form>
  )
}
