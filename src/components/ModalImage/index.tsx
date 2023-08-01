import { Figure, Modal } from "react-bootstrap";
import "./ModalImage.css";

interface ModalImageProps {
  image?: any;
  show?: boolean;
  handleClose: () => void;
}

const ModalImage: React.FC<ModalImageProps> = ({
  image,
  show,
  handleClose,
}) => {
  return (
    <>
      <Modal
        dialogClassName="modal-fit-content"
        contentClassName="bg-secondary"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="text-white" closeVariant="white" closeButton>
          <Modal.Title>{image.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <img
              className="w-100"
              src={`https://i.imgur.com/` + image.cover + `.jpg`}
              alt={image.alt}
              data-src={image.link}
            />
          </Figure>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around text-white">
          <div>👍 {image.ups}</div>
          <div>👎 {image.downs}</div>
          <div>💯 {image.score}</div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalImage;
