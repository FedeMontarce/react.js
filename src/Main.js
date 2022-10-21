import React from 'react'
import ContadorContainer from './ItemListContainer'
import { Card } from 'antd';
import { Col, Row } from 'antd';

const style = {
    background: '#0092ff',
    padding: '8px 0',
  };

const { Meta } = Card;

const Main = (tarjetas) => {
    return (
        <main>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.efeeme.com/wp-content/uploads/gorillaz-22-05-13-a.jpg" />}>
            <Meta title="Gorillaz" description="Demon days" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7PKE1k9LQhwc0eqtdoKdtdm7aio-y8q8Bhp5YZKU4WkcfWYzeCYOM2PA_W17tQxQ5h0&usqp=CAU" />}>
            <Meta title="Pink Floyd" description="The Dark Side of the Moon" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.photolari.com/wp-content/uploads/2019/12/foto-0-portada-nevermind-nirvana.jpg" />}>
            <Meta title="Nirvana" description="Nevermind" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://lastfm.freetls.fastly.net/i/u/770x0/dc89e2bfc86868ed5175d4c2be624096.jpg" />}>
            <Meta title="Green Day" description="American Idiot" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src=""/>}>
            <Meta title="" description="" />
            </Card>
        </div>
      </Col>
    </Row>
        </main>
    )
}

export default Main