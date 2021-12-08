import { Col, Row, Form, Input } from "antd"

const { TextArea } = Input;
export function FooterContact() {
    return (
        <>
            <Form>
                <p>Liên hệ</p>
                <Row>
                    <Col md={11}>
                        <Form.Item>
                            <Input placeholder='Họ và tên'/>
                        </Form.Item>
                    </Col>
                    <Col md={11} offset={2}>
                        <Form.Item>
                            <Input placeholder='Email'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <TextArea placeholder='Họ và tên'/>
                </Form.Item>
            </Form>
        </>
    )
}