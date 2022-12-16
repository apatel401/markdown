import React from 'react'
import { NoteData, Tag } from './App'

import NewForm from './NewForm'
import { useNote } from './NoteLayout'

type editNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
export default function EditNote({ onSubmit, onAddTag, availableTags }: editNoteProps) {
  const note = useNote()
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NewForm  
      title={note.title} 
      markdown={note.markdown} 
      tags={note.tags} 
      
      onSubmit={data => onSubmit(note.id, data)} 
      onAddTag={onAddTag} 
      availableTags={availableTags} />
    </>
  )
}
