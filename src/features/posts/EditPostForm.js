import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector(state => state.posts.find(post => post.id === postId))

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <form>
      <h2>Edit Post</h2>

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
