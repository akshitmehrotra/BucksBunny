import React from 'react';
import Modal from 'react-modal';

// Set the modal root element to the app root div
Modal.setAppElement('#root');

function VideoModal({ isOpen, onClose }) {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '4px',
    width: '60%', // Adjust the width as needed
    maxWidth: '600px',
    maxHeight: '80%', // Adjust the height as needed
    overflow: 'auto', // Allow scrolling if content exceeds the modal's dimensions
    zIndex: 1000,
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const videoContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%', /* 16:9 aspect ratio */
    height: '0',
  };

  const iframeStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="YouTube Video Modal"
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
    >
      <button style={closeButtonStyle} onClick={onClose}>
        Close
      </button>
      <div style={modalStyle}>
        <div style={videoContainerStyle}>
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameBorder="0"
            allowFullScreen
            style={iframeStyle}
          ></iframe>
        </div>
      </div>
    </Modal>
  );
}

export default VideoModal;
