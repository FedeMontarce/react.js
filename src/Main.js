import React from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';

const style = {
    padding: '8px 0px 0px 40px',
  };

const { Meta } = Card;

const Main = (tarjetas) => {
    return (
        <main>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.efeeme.com/wp-content/uploads/gorillaz-22-05-13-a.jpg" />}>
            <Meta title="Gorillaz" description="Demon days" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7PKE1k9LQhwc0eqtdoKdtdm7aio-y8q8Bhp5YZKU4WkcfWYzeCYOM2PA_W17tQxQ5h0&usqp=CAU" />}>
            <Meta title="Pink Floyd" description="The Dark Side of the Moon" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.photolari.com/wp-content/uploads/2019/12/foto-0-portada-nevermind-nirvana.jpg" />}>
            <Meta title="Nirvana" description="Nevermind" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://lastfm.freetls.fastly.net/i/u/770x0/dc89e2bfc86868ed5175d4c2be624096.jpg" />}>
            <Meta title="Green Day" description="American Idiot" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/abbey-road-the-beatles-1969/4248779-1-esl-ES/abbey-road-the-beatles-1969.jpg?resize=768:*"/>}>
            <Meta title="The Beatles" description="Abbey Road" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/graduation-kanye-west-2007/4247677-1-esl-ES/graduation-kanye-west-2007.jpg?resize=768:*"/>}>
            <Meta title="Kanye West" description="Graduation" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/born-in-the-u.s.a.-bruce-sprinsteen-1984/4247767-1-esl-ES/born-in-the-u.s.a.-bruce-sprinsteen-1984.jpg?resize=768:*"/>}>
            <Meta title="Bruce Sprinsteen" description="Born in the U.S.A." />
            </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/back-in-black-ac-dc-1980/4247697-1-esl-ES/back-in-black-ac-dc-1980.jpg?resize=768:*"/>}>
            <Meta title="AC/DC" description="Back in Black" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/aladdin-sane-david-bowie-1973/4247647-1-esl-ES/aladdin-sane-david-bowie-1973.jpg?resize=768:*"/>}>
            <Meta title="David Bowie" description="Aladdin Sane" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://m.media-amazon.com/images/I/51FJGzUCBFL._SY580_.jpg"/>}>
            <Meta title="Michael Jackson " description="Thriller" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/31175159/The-Beatles-Sgt.-Peppers-Lonely-Hearts-Club-Band.jpeg"/>}>
            <Meta title="The Beatles" description="Sgt. Pepper's Lonely Hearts Club Band" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/the-velvet-underground-nico-the-velvet-underground-1967/4247777-1-esl-ES/the-velvet-underground-nico-the-velvet-underground-1967.jpg?resize=768:*"/>}>
            <Meta title="The Velvet Underground" description="The Velvet Underground & Nico" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_610/v1605870809/content-items/006/255/544/joydivision-original.jpg?1605870809"/>}>
            <Meta title="Joy Division" description="Unknown Pleasures" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_610/v1605870809/content-items/006/255/546/thepolice-original.jpg?1605870809"/>}>
            <Meta title="The Police" description="Synchronicity" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_610/v1605870809/content-items/006/255/548/kendricklamar-original.png?1605870809"/>}>
            <Meta title="Kendrick Lamar" description="To Pimp a Butterfly" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://exileshmagazine.com/wp-content/uploads/2018/07/eagles-hotel-california.jpg"/>}>
            <Meta title="Eagles" description="Hotel California" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-1-1555363346.jpg?crop=1xw:1xh;center,top&resize=480:*"/>}>
            <Meta title="Led Zeppelin" description="Led Zeppelin I" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/07/soda07.jpg"/>}>
            <Meta title="Soda Stereo" description="Canción animal" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://admin.grupo-ekos.com//storage/posts/September2021/8eed8ec437944c00cc8c4a306283de9b%20(1).jpg"/>}>
            <Meta title="Whitney Houston" description="The bodygard (BSO)" />
            </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://m.media-amazon.com/images/I/81DJbxqgq2L._AC_SL1425_.jpg"/>}>
            <Meta title="Bee Gees" description="Saturday Night Fever" />
            </Card>
        </div>
      </Col>
    </Row>
        </main>
    )
}

export default Main