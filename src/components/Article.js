import React from 'react'

const Article = ({ title, date, preview, timeEmoji, minutes  }) => {
    const defaultDate = date ? new Date(date).toDateString() : "January 1, 1970";
    return (
      <article>
        <h3>{title}</h3>
        <small>Date: {defaultDate}</small>
        <p>{timeEmoji} {minutes} min read</p>
        <p>{preview}</p>
      </article>
    );
  };

export default Article