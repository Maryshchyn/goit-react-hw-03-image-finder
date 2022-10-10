import { Component } from "react";
import { StyledOverlay, StyledModal } from './Modal.styled';
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
                    this.props.onClose()
                    
                }
            }


    render() {
        
        return createPortal(
        <StyledOverlay onClick={this.handleBackDropClick}>
            <StyledModal>
                
                <img src="" alt="" />
            </StyledModal>
        </StyledOverlay>, madalRoot);
            
        
    }

}