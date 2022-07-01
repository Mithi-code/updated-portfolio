import React, { useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  top: -50px;
  left: 0;
  z-index: 99999;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 999;
  border-radius: 10px;

`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  content: fit-content:
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  padding: 10px;
  background: #022c43;

  p {
    margin-bottom: 1rem;
    font-size: 16px;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 10px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({data}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = (e)=>{
    if (e.target.id === 'modal')
    setShowModal(true)}
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <div id='modal' onClick={openModal}>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={data.Image} alt='project' />
              <ModalContent>
                <p>{data.Title}</p>
                <p>{data.Descrption}</p>
                <button>Source Code..</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </div>
  );
};
