import { useContext } from "react";

import ModalContext from "../../contexts/modalContext";

import { ModalBackground, ModalContainer, Body, Footer, CancelButton, GoButton } from "./style"

function Modal() {

    return (
        <ModalBackground>
            <ModalContainer>
                <Body>
                    
                </Body>
                <Footer>
                            <CancelButton onClick={() => setIsModalOpen(false)}>check again</CancelButton>
                            <GoButton onClick={() => submitData(tableId, data, type)}>all good!</GoButton>
                </Footer>
            </ModalContainer>
        </ModalBackground >
    );
}

export default Modal;