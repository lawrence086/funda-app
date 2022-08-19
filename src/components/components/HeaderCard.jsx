import React from 'react';
import { Card, Image } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import ImgLogo from '../../images/logo-app.png';

const HeaderCard = () => {
  return (
    <Card className="card-content">
        <Card.Header className='card-header' style={{border: 'none'}}>
          <div style={{flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>
            <div style={{flexDirection: 'row', display: 'flex'}}>
                <div style={{}}>
                  <Image src={ImgLogo} className="p-logo d-flex" />
                </div>
                <span className='app-name' style={{padding:5, fontWeight: '700', fontSize: '1.2rem'}}>
                    Trainer-App
                    <h2 style={{fontSize: '0.6rem', paddingTop: 3, color: '#a9a9a9'}}>Good morning, Lawrence</h2>
                </span>
            </div>
            <div style={{}}>
              <div>
                  <Avatar src="/broken-image.jpg" className="p-avater d-flex" />
              </div>   
            </div>
          </div>
        </Card.Header>
    </Card>
  )
}

export default HeaderCard