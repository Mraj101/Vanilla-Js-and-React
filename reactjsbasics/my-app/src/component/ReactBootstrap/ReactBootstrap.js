import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function ReactBootstrap() {
  return (
        <Card style={{width:"300px", margin:"auto"}} className="p-100">
           <Card.Body>
             <Card.Title>Cards the freak</Card.Title>
             <Card.Text>
                hello , I am hasnain ahmed miraj, a bit old now but they say the peak of young age.
             </Card.Text>
             <Button className="p-10">click</Button>
           </Card.Body>
        </Card>
    )
}
