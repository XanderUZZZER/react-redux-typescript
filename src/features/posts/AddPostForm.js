import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('')
      setContent('')
    }
  }


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

      <div className="form-group">
        <label htmlFor="postContent">Post content:</label>
        <textarea
          name="postContent"
          id="postContent"
          className="form-control"
          value={content}
          onChange={onContentChanged}
        />
      </div>

      <div className='d-flex'>
        <button
          type="button"
          className="btn btn-primary ml-auto"
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </div>
    </form>
  )
}
