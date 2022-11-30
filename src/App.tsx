import {useMemo} from 'react'
import { Container } from 'react-bootstrap'
import {Routes, Route, Navigate} from 'react-router-dom'
import NewNote from './NewNote'
import useLocalStorage from './useLocalStorage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[]
}

export type RawNote = {
 id: string
} & RawNoteData

export type RawNoteData = {
  title: string,
  markdown: string,
  tagIds: string[]
 }

export type Tag = {
  id: string,
  label: string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES" , [])
  const [tags, setTags] = useLocalStorage<Tag[]>("Tags" , [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

  return (
    <Container className='my-4'>
      <Routes>
      <Route path="/" element={<h1>Hellew</h1>}/>
      <Route path="/new" element={<NewNote />}/>
      <Route path="/:id">
      <Route index element={<h1>Show</h1>}/>
      <Route path="edit" element={<h1>Edit</h1>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Container>
  )
}

export default App
