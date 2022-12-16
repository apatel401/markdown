import React, { useRef, useState, FormEvent } from 'react'
import CreatableReactSelect from 'react-select/creatable'

import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Stack, Button, Tab } from 'react-bootstrap'
import { NoteData, Tag } from './App'
import { v4 as uuidV4 } from 'uuid'

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>
export default function NewForm({ onSubmit, onAddTag, availableTags, title = "", markdown= "", tags= [] }: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setselectedTags] = useState<Tag[]>(tags)
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        })
        navigate("..")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} defaultValue={title} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti value={selectedTags.map(tag => {
                                return { label: tag.label, value: tag.id }
                            })}
                                onCreateOption={label => {
                                    const newTag = { id: uuidV4(), label };
                                    onAddTag(newTag);
                                    setselectedTags(prev => [...prev, newTag])
                                }}
                                options={availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                onChange={tags => {
                                    setselectedTags(tags.map(tag => {
                                        return { label: tag.label, id: tag.value }
                                    }))
                                }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Col>
                    <Form.Group controlId='markdown'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markdownRef} defaultValue={markdown} required as="textarea" rows={15} />
                    </Form.Group>
                </Col>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to=".." >
                        <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}
