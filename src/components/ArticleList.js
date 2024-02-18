import React from 'react'
import Article from './Article'

function timeSpent(minutes) {
  const timeEmoji=[]

  if (minutes<30){
    const coffee=Math.ceil(minutes/5)
    for (let i=0;i<coffee;i++){
      timeEmoji.push("☕️")
    }
  }else{
    const bentoBoxes=Math.ceil(minutes/10)
    for (let i=0;i<bentoBoxes;i++){
      timeEmoji.push('🍱')
    }
  }
  return timeEmoji.join("")
}
function ArticleList({posts}) {
  return (
    <main>
       {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          timeEmoji={timeSpent(post.readTime)}
          minutes={post.minutes}
          preview={post.preview}
          />
        ))}
    </main>
  )

}


export default ArticleList