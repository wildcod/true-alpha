
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import style from './Modals.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export default function Modals() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button className={style.crossbutton} onClick={closeModal}>close</button>
        {/* <div>I am a modal</div> */}
        {/* <div class="container">
        </div> */}
        <form>
          <label>
            <span className={style.labels}>
            Name:
            </span>
           <input type="text" name="name" className={style.inputtext}/>
           </label>
          <input type="submit" value="Submit" className={style.submibutton} />
        </form>

      </Modal>
    </div>
  );
}
