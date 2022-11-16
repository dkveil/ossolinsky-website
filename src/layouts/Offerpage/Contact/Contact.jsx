import React from 'react';
import { Wrapper, ContentWrapper } from './Contact.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading/Heading';
import { Button } from 'components/Button/Button';
import { SectionParagraph } from 'components/SectionParagraph/SectionParagraph';
import { PropTypes } from 'prop-types';

export const Contact = ({ phonenumber, email }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading variant="h2" component="h3" textAlign="center" color="black">
                        Zainteresowany ofertą?
                    </Heading>
                    <SectionParagraph textAlign="center">
                        Opowiedz mi o swojej imprezie kontaktując się ze mną bezspośrednio lub skorzystaj z formularza kontaktowego! :)
                    </SectionParagraph>
                    <address>
                        {phonenumber && <span>{phonenumber}</span>}
                        {email && <span>{email}</span>}
                    </address>
                    <Button variant="full-contained" isLink path="/kontakt">
                        Formularz kontaktowy
                    </Button>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

Contact.propTypes = {
    phonenumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};
