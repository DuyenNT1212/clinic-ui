import { Col, Row } from "antd";
import { FooterContact } from "./FooterContact";

export function MainFooter() {
    return(
        <div style={{backgroundColor: '#d1d1d1'}}>
            <Row>
                <Col md={12}>
                    <p>Địa chỉ</p>
                    <p>Liên hệ với Nha khoa Quang Hưng 24/7</p>
                    <p>Cơ sở 1: Ngã ba chợ Tân Lập - Đan Phượng - Hà Nội</p>
                    <p>Cơ sở 2: 150 Phan Đình Phùng, thị trấn Phùng, Đan Phượng, Hà Nội</p>
                    <p>Hotline: 024.7770.6699</p>
                    <p>nhakhoaquanghungvn@gmail.com</p>
                </Col>
                <Col md={12}>
                    <FooterContact />
                </Col>
            </Row>
        </div>
    )
}