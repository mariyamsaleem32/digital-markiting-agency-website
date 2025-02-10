import React from 'react';
import { QRCode, Space } from 'antd';

const AppQR = () => {
  const [text, setText] = React.useState('https://eclectic-snickerdoodle-c481a3.netlify.app/');
  return (
    <Space direction="vertical" align="center" >
      <QRCode value={text || '-'} style={{background:'white'}}/>
    <p style={{color:"white",fontWeight:'bold'}}>scan me for portfolio</p>
    </Space>
  );
};
export default AppQR;