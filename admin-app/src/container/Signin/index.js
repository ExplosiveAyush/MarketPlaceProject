import React from 'react';
import Layout from '../../components/Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container,Row,Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
const Signin = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:"50px"}}>
                    <Col md={{span: 6,offset: 3}}>
                        <Form>
                        <Input
                                label="Email"
                                placeholder="Email"
                                value=""
                                type="email"
                                onChange={() => { }}
                            />

                            <Input
                                label="password"
                                placeholder="password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Signin;
