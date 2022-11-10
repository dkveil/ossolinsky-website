import React from 'react';
import { Wrapper, ContentWrapper, ContentContainer } from './FormInfo.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph/SectionParagraph';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { isDesktop } from 'utils/isDesktop';

export const FormInfo = () => {
    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <ContentWrapper>
                        <Heading
                            variant="h2"
                            color="black"
                            overlay
                            overlayColor="white"
                            overlayPosition={
                                isDesktop()
                                    ? {
                                          top: '-1rem',
                                          left: '-2rem',
                                      }
                                    : {
                                          top: '-1rem',
                                          left: '-.6rem',
                                      }
                            }
                            overlaySize={
                                isDesktop()
                                    ? {
                                          width: '16rem',
                                          height: '6rem',
                                      }
                                    : {
                                          width: '9rem',
                                          height: '4.5rem',
                                      }
                            }
                            margin="0 0 2rem"
                        >
                            Pogadajmy o<br />
                            Twojej imprezie
                        </Heading>
                        <SectionParagraph margin="0 0 5rem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet faucibus justo. Nullam a faucibus
                            nisi, et suscipit augue. Vivamus orci sem, luctus in consectetur auctor, elementum ac mauris.
                        </SectionParagraph>
                    </ContentWrapper>
                    <ContactForm />
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};
