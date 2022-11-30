import React from 'react'
import { Row, Col, Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NoteList() {
    return (
        <Row>
            <Col>
                <h1>Notes</h1>
            </Col>
            <Col xs="auto">
                <Stack direction="horizontal" gap={2}>
                    <Link to="/new">
                        <Button variant="primary">Create</Button>
                    </Link>
                    <Button variant="outline-secondary                                                                              76gre32wqjukl">Create</Button>
                </Stack>
            </Col>
        </Row>
    )
}

export default NoteList