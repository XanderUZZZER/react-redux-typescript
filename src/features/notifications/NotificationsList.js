import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'
import classnames from 'classnames'

import {
  selectAllNotifications,
  allNotificationsRead,
} from './notificationSlice'
import { selectAllUsers } from '../users/usersSlice'

export const NotificationsList = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User',
    }

    const notificationClassname = classnames('list-group-item', {
      'list-group-item-success': notification.isNew,
    })

    return (
      <li key={notification.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </li>
    )
  })

  return (
    <div className='container'>
      <h2>Notifications</h2>
      <ul className='list-group list-group-flush'>{renderedNotifications}</ul>
    </div>
  )
}
