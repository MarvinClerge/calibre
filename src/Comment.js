class Comment {
  constructor({id, content, media_id, user_id}) {
    this.id = id
    this.content = content
    this.media_id = media_id
    this.user_id = user_id
  }

  templateComment() {
    let commentsArea = document.getElementById('comments')
    let commentLi = document.createElement('li')
    commentLi.className = 'media-comment'
    commentLi.innerText = this.content
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    commentLi.appendChild(deleteButton)
    return commentLi
  }
}
