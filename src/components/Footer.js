import React from 'react'
import { Button, Card, } from 'react-bootstrap'
function Footer() {
    return (
        <div style={{marginTop:"25%"}}>
            <Card className="text-center">
                <Card.Header>INVENTORY MANAGEMENT</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Button variant="primary">CONTACT US</Button>
                </Card.Body>
                <Card.Footer className="text-muted">INFO - SUPPORT US - MARKETING</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
