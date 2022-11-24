import React from 'react';
import { Wrapper, Heading, Paragraph, ContentWrapper } from 'layouts/404/404.styles';
import { Container } from 'styles/Container';
import { Button } from 'components/Button';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from '../components/SEO/SEO';

const NotFoundPage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading>404</Heading>
                    <Paragraph>
                        Nic tutaj nie ma :(
                        <br />
                        Prawdopodobnie się zgubiłeś!
                    </Paragraph>
                    <Button variant="contained" isLink path="/" boxOverlay={isDesktop() ? 'bottom-left' : false} boxOverlayColor="white">
                        Strona główna
                    </Button>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default NotFoundPage;

export const Head = () => (
    <SEO title="Ossolinsky404 - prawdopodobnie się zgubiłeś!" description="Nic tutaj nie ma! Prawdopodobnie się zgubiłeś!" />
);
