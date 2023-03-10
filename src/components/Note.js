const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div id='anec'>
        <strong>{note.important ? 'important' : ''}</strong>
      </div>
    </div>
  )
}
export default Note
