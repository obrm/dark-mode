import React from 'react'
import moment from 'moment'

const Article = ({ title, snippet, date, length, url }) => {
  return (
    <article className='post'>
      <h2>
        <a href={url} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd, MMMM Do YYYY')},</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
