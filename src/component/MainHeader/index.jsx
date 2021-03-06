
import { Col, Row, Layout, Menu, Dropdown, Image } from 'antd';
import { DownOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.css';
import Logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const MainHeader = () => {

    const path = window.location.pathname;

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    return (
        <div>
            <Layout>
    <Header className="header">
        <Row>
            <Col md={4}>
                <div>
                    <Image
                    width={50}
                    src={Logo}
                    preview={false}
                    />
                    <p style={{float: 'right', color: 'white'}}>Nha khoa Quang Hưng</p>
                </div>
            </Col>

            <Col md={20}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={path}>
                <Menu.Item key="/trangchu"><Link to="/trangchu">Trang chủ</Link></Menu.Item>
                <Menu.Item key="gioithieu"><Link to="/gioithieu">Giới thiệu</Link></Menu.Item>
                <Menu.Item key="/dichvutuvan"><Link to="/dichvutuvan">Dịch vụ - Tư vấn</Link></Menu.Item>
                <Menu.Item key="/hosodientu"><Link to="/hosodientu">Hồ sơ điện tử</Link></Menu.Item>
                <Menu.Item key="/nhakhoa"><Link to="/nhakhoa">Nha khoa</Link></Menu.Item>
                <Menu.Item key="/doingubacsi"><Link to="/doingubacsi">Đội ngũ bác sĩ</Link></Menu.Item>
                <Menu.Item key="/banggia"><Link to="/banggia">Bảng giá</Link></Menu.Item>
                <Menu.Item key="/datlichkham"><Link to="/datlichkham">Đặt lịch khám</Link></Menu.Item>
                {/* <Dropdown overlay={menu} trigger={['click']}>
                    Quản trị <DownOutlined />
                </Dropdown> */}
                {/* <Menu.Item key="9">Quản trị
                    <Dropdown></Dropdown>
                </Menu.Item> */}
                {/* <Menu.Item key="9"> */}
                    <SubMenu key="9" title='Quản trị'>
                        <Menu.Item key="/danhsachbacsi"><Link to="/danhsachbacsi">Danh sách bác sĩ</Link></Menu.Item>
                        <Menu.Item key="/danhsachbenh"><Link to="/danhsachbenh">Danh sách bệnh</Link></Menu.Item>
                    </SubMenu>
                {/* </Menu.Item> */}
            </Menu>
            </Col>
        </Row>
    </Header>
  </Layout>
        </div>
    )
}