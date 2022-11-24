import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Alert.styles';
import { PropTypes } from 'prop-types';
import CloseIcon from 'assets/icons/close.svg';

export const Alert = ({ open, type, closeanimation, handleClose }) => {
    const message = {
        error: 'Coś poszło nie tak! Spróbuj ponownie lub napisz do mnie bezpośrednio! :)',
        success: 'Udało się wysłać wiadomość!',
    };

    return (
        open &&
        type &&
        ReactDOM.createPortal(
            <Wrapper type={type} closeanimation={closeanimation}>
                <span>{message[type]}</span>
                <CloseIcon onClick={handleClose} />
            </Wrapper>,
            document.body
        )
    );
};

Alert.propTypes = {
    open: PropTypes.bool,
    type: PropTypes.string,
    closeanimation: PropTypes.bool,
    handleClose: PropTypes.func,
};
