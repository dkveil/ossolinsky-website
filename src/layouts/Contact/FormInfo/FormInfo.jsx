import React from 'react';
import { Wrapper, ContentWrapper } from './FormInfo.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph/SectionParagraph';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const FormInfo = () => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        overlay
                        overlayColor="white"
                        overlayPosition={{
                            top: '-1rem',
                            left: '-.6rem',
                        }}
                        overlaySize={{
                            width: '9rem',
                            height: '4.5rem',
                        }}
                        margin="0 0 2rem"
                    >
                        Pogadajmy o<br />
                        Twojej imprezie
                    </Heading>
                    <SectionParagraph margin="0 0 5rem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet faucibus justo. Nullam a faucibus
                        nisi, et suscipit augue. Vivamus orci sem, luctus in consectetur auctor, elementum ac mauris.
                    </SectionParagraph>
                    <ContactForm />
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};
