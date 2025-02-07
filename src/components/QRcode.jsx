import React from 'react';
import { QRCode, Space } from 'antd';

const AppQR = () => {
  const [text, setText] = React.useState('https://ant.design/');
  return (
    <Space direction="vertical" align="center" >
      <QRCode value={text || '-'} style={{background:'white'}}/>
    <p style={{color:"white",fontWeight:'bold'}}>scan me for portfolio</p>
    </Space>
  );
};
export default AppQR;