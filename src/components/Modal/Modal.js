import { Component } from "react";
import { StyledOverlay, StyledModal, StyledImg } from './Modal.styled';
import { createPortal } from "react-dom";


const madalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
            
                
    componentWillUnmount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('esc')
        this.props.onClose()
                    
                }
            }

handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
    render() {
        const { largeImg } = this.props;
        return createPortal(
        <StyledOverlay onClick={this.handleOverlayClick}>
            <StyledModal>
                
                <StyledImg src={largeImg} alt="" />
            </StyledModal>
        </StyledOverlay>, madalRoot);
            
        
    }

}