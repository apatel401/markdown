import React from 'react'
import { NoteData, Tag } from './App'

import NewForm from './NewForm'

type newNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
export default function NewNote({ onSubmit, onAddTag, availableTags }: newNoteProps) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NewForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}
