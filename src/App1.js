import React, { useState, useEffect, useRef } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'

const App = () => {
  const [notes, setNotes] = useState([])
  // const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [errTextColour, setErrTextColour] = useState(true)

  const noteFormRef = useRef()

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])
  // Handle the first loading page with user loged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = async (noteObject) => {
    // noteService.create(noteObject).then((returnedNote) => {
    //   setNotes(notes.concat(returnedNote))
    // })
    noteFormRef.current.toggleVisibility()
    setErrTextColour(false)
    try {
      const saveNotes = await noteService.create(noteObject)
      // .then((returnedNote) => {
      // setNotes(notes.concat(noteObject))
      setNotes([...notes, saveNotes])
      setErrorMessage(`Note '${noteObject.content}' succesfully saved.`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      // })
    } catch (error) {
      console.log(error.response.data)
      setErrTextColour(true)
      setErrorMessage(error.response.data)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // show list of important and all
  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  // toggle button
  const toggleImportanceOf = (id) => {
    //  defines the unique url for each note resource based on its id.

    //  find method  find the note to modify,then assign to note.
    // Create new object exact copy of old accept the important property.

    // new note is then sent with a PUT request to the backend where it will replace the old object. put(url, changedNote)
    // callback function sets the state and render component notes with new array , except for the old note with is replaced with teh note exact item.

    const note = notes.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch(() => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        // alert(
        //   `the note '${note.content}' was already deleted from server`
        // )
        setNotes(notes.filter((n) => n.id !== id))
      })
  }
  // === login handler ===
  const handleLogin = async (loginObject) => {
    try {
      const user = await loginService.login({
        username: loginObject.username,
        password: loginObject.password,
      })
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      setUser(user)
      console.log('logging in with', user.username, user.password)
    } catch (exception) {
      setErrorMessage('Wrong user name or password!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  // Without try and catch

  //   const user = await loginService.login({
  //     username: blogObject.username,
  //     password: blogObject.password,
  //   })
  //   window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
  //   noteService.setToken(user.token)
  //   setUser(user)
  //   console.log('logging in with', blogObject.username, blogObject.password)

  //   setErrorMessage(
  //     `Note '${blogObject.username}' succesfully saved.`,
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   )
  // }

  // === login form ===

  const loginForm = () => (
    <Togglable buttonLabel='log in'>
      <LoginForm
        // username={username}
        // password={password}
        // handleUsernameChange={({ target }) => setUsername(target.value)}
        // handlePasswordChange={({ target }) => setPassword(target.value)}
        createLogin={handleLogin}
      />
    </Togglable>
  )

  const noteForm = () => (
    <Togglable buttonLabel='New note' ref={noteFormRef}>
      <NoteForm createNote={addNote} signOff={signOff} />
    </Togglable>
    // <form onSubmit={addNote}>
    //   <input value={newNote} onChange={handleNoteChange} />
    //   <button type='submit'>save</button>
    // </form>
  )

  //  === signoff ===
  const signOff = () => {
    window.localStorage.clear()
    return setUser(null)
  }

  return (
    <div className='main_container'>
      <h1>Notes</h1>
      <Notification message={errorMessage} textColor={errTextColour} />
      {/* == conditional form */}
      {user === null ? (
        loginForm()
      ) : (
        <div className='logInBy'>
          <p>{user.name} logged-in</p>
          <button type='button' onClick={signOff}>
            {' '}
            Log Out
          </button>

          {noteForm()}
        </div>
      )}

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default App
