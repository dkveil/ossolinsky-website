import React from 'react';
import { Wrapper } from './CookieNotice.styles';
import { Button } from 'components/Button';
import { PropTypes } from 'prop-types';
import Cookies from 'universal-cookie';

export const CookieNotice = ({ closeCookieNotice }) => {
    const [hide, setHide] = React.useState(false);
    const cookies = new Cookies();

    const handleClose = () => {
        cookies.set('registered', 'true', {
            path: '/',
            expires: new Date(Date.now() + 604800000),
        });
        setHide(true);
        setTimeout(() => {
            closeCookieNotice();
        }, 1000);
    };

    return (
        <Wrapper hide={hide}>
            <p>
                Na stronie są stosowane pliki cookies. Korzystając ze strony wyrażasz zgodę na używanie cookies, zgodnie z ustawieniami
                przeglądarki.
            </p>
            <div>
                <Button variant="no variant" isLink path="/polityka-prywatnosci">
                    Dowiedz się więcej
                </Button>
                <Button variant="contained" onClickHandler={handleClose}>
                    Akceptuję
                </Button>
            </div>
        </Wrapper>
    );
};

CookieNotice.propTypes = {
    closeCookieNotice: PropTypes.func.isRequired,
};
