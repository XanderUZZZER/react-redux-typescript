import { parseISO } from 'date-fns'
import { formatDistanceToNow } from 'date-fns/esm'
import React from 'react'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)

    timeAgo = `${timePeriod} ago`
  }
  return (
    <div className='text-right font-italic'>
      <small title={timestamp} className='text-body'>
        <i>{timeAgo}</i>
      </small>
    </div>
  )
}
