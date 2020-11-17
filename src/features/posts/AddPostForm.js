import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)


  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged} />
        <label htmlFor="postTitle">Post title:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged} />
        <button type='button'>Save Post</button>
      </form>
    </section>
  )
}
