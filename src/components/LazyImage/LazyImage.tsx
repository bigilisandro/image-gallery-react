import React, { useRef, useEffect, useState } from "react";
import "./LazyImage.css";
import { Figure, Card } from 'react-bootstrap';
import ModalImage from '../ModalImage'

interface LazyImageProps {
  image?: any;
};

const LazyImage: React.FC<LazyImageProps> = ({ image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <Card bg="secondary" border="secondary" className="cursor-pointer" onClick={handleShow}>
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

export default LazyImage;
