import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Alert.styles';
import { PropTypes } from 'prop-types';
import CloseIcon from 'assets/icons/close.svg';
import parse from 'html-react-parser';

export const Alert = ({ open, type, closeanimation, handleClose }) => {
    const message = {
        error: 'Coś poszło nie tak!<br />Spróbuj ponownie lub napisz do mnie bezpośrednio! :)',
        success: 'Dzięki za wiadomość!<br />Odpiszę tak szybko jak będę mógł! :)',
    };

    return (
        open &&
        type &&
        ReactDOM.createPortal(
            <Wrapper type={type} closeanimation={closeanimation}>
                <span>{parse(message[type])}</span>
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
