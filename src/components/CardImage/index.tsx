import React, { useState } from "react";
import "./CardImage.css";
import { Card } from 'react-bootstrap';
import ModalImage from '../ModalImage'

interface CardImageProps {
  image?: any;
};

const CardImage: React.FC<CardImageProps> = ({ image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <Card bg="secondary" border="secondary" data-test-id="component-image" className="cursor-pointer" onClick={handleShow}>
        <Card.Img variant="top" src={`https://i.imgur.com/` + image.cover + `.jpg`} className="lazy-image" />
        <Card.Body>
          <Card.Text>
            {image.title}
          </Card.Text>
        </Card.Body>
      </Card>
      <ModalImage image={image} show={show} handleClose={handleClose} />
    </>
  );
};

export default CardImage;
