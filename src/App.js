import { useState } from 'react'
import Notes from './components/Notes'
import Note from './components/Note'
import Home from './components/Home'
import Users from './components/Users'
import Login from './components/Login'
import React from 'react'
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  // useParams,
  // useNavigate,
  useMatch,
} from 'react-router-dom'

// const Notes = ({ notes }) => (
//   <div>
//     <h2>Notes</h2>
//     <ul>
//       {notes.map((note) => (
//         <li key={note.id}>
//           <Link to={`/notes/${note.id}`}>{note.content}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// const Users = () => (
//   <div>
//     <h2>TKTL notes app</h2>
//     <ul>
//       <li>Matti Luukkainen</li>
//       <li>Juha Tauriainen</li>
//       <li>Arto Hellas</li>
//     </ul>
//   </div>
// )

// const Login = (props) => {
//   const navigate = useNavigate()

//   const onSubmit = (event) => {
//     event.preventDefault()
//     props.onLogin('mluukkai')
//     navigate('/')
//   }

//   return (
//     <div>
//       <h2>login</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           username: <input />
//         </div>
//         <div>
//           password: <input type='password' />
//         </div>
//         <button type='submit'>login</button>
//       </form>
//     </div>
//   )
// }

const App = () => {
  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ]

  // const [notes, setNotes] = useState([
  //   {
  //     id: 1,
  //     content: 'HTML is easy',
  //     important: true,
  //     user: 'Matti Luukkainen',
  //   },
  //   {
  //     id: 2,
  //     content: 'Browser can execute only JavaScript',
  //     important: false,
  //     user: 'Matti Luukkainen',
  //   },
  //   {
  //     id: 3,
  //     content: 'Most important methods of HTTP-protocol are GET and POST',
  //     important: true,
  //     user: 'Arto Hellas',
  //   },
  // ])

  const [user, setUser] = useState(null)

  const match = useMatch('/notes/:id')

  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null

  const login = (user) => {
    setUser(user)
  }

  const padding = {
    padding: 5,
  }

  return (
    <div>
      <div>
        <Link style={padding} to='/'>
          home
        </Link>
        <Link style={padding} to='/notes'>
          notes
        </Link>
        <Link style={padding} to='/users'>
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to='/login'>
            login
          </Link>
        )}
      </div>
      <Routes>
        <Route path='/notes/:id' element={<Note note={note} />} />
        <Route path='/notes' element={<Notes notes={notes} />} />
        <Route
          path='/users'
          element={user ? <Users /> : <Navigate replace to='/login' />}
        />
        <Route path='/login' element={<Login onLogin={login} />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2022</em>
      </div>
    </div>
  )
}
export default App
