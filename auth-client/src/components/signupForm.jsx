import { Button, Container, Form } from 'react-bootstrap';

const SignupForm = () => {
    return(
        <Container className="mt-5">

            <Form>
                <h2 className="text-center mb-4">Signup Form</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control type='' name='' value='' placeholder='' required/>
                </Form.Group>

            <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='' name='' value='' placeholder='' required/>
                </Form.Group>

            <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='' name='' value='' placeholder='' required/>
                </Form.Group>

            <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='' name='' value='' placeholder='' required/>
                </Form.Group>

            <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='' name='' value='' placeholder='' required/>
                </Form.Group>

            </Form>

            <Button>
                Sign Up
            </Button>
        </Container>
    )
}

export default SignupForm;