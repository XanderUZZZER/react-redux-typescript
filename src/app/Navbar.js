import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import {
  fetchNotifications,
  selectAllNotifications
} from '../features/notifications/notificationSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(n => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge badge-info">{numUnreadNotifications}</span>
    )
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Redux Essentials Example</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-link" to="/users" data-toggle="collapse" data-target=".navbar-collapse.show">Users</Link>
            <Link className="nav-link" to="/notifications" data-toggle="collapse" data-target=".navbar-collapse.show">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="btn btn-outline-success btn-sm" onClick={fetchNewNotifications}>Refresh Notifications</button>
        </div>
      </div>
    </nav>
  )
}
