import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, LoadingRing } from './LoadingScreen.styles';
import { PropTypes } from 'prop-types';

export const LoadingScreen = ({ isOpen }) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => (document.body.style.overflow = 'unset');
    }, [isOpen]);

    return (
        isOpen &&
        ReactDOM.createPortal(
            <Wrapper>
                <LoadingRing>
                    <div />
                </LoadingRing>
            </Wrapper>,
            document.body
        )
    );
};

LoadingScreen.propTypes = {
    isOpen: PropTypes.bool,
};
