import React from 'react';
import { Wrapper, ContentWrapper } from './AboutMe.styles';
import { Container } from 'styles/Container';
import { SectionParagraph } from 'components/SectionParagraph';
import { Heading } from 'components/Heading';

export const AboutMe = () => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 2rem"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-.2rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '10rem',
                            height: '4rem',
                        }}
                    >
                        Co mnie <br />
                        wyróżnia?
                    </Heading>
                    <SectionParagraph margin="0 0 5rem">
                        Jestem młodym barmanem z zapałem do pracy oraz nauki tego co daje mi realną frajdę. Nabyłem niemałe doświadczenie od
                        starszych barmanów, jednak w tym zawodzie nie liczy się tylko klasyczne podążanie za utartymi drogami. Trzeba iść
                        wraz z trendami wśród koktajli, sposobu ich wykonania i jakości pracy.
                    </SectionParagraph>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 2rem"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-.2rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '12rem',
                            height: '4rem',
                        }}
                    >
                        Dlaczego ja?
                    </Heading>
                    <SectionParagraph>
                        Moją pracę cechuje profesjonalizm, rzetelność, świeże podejście i miłość do tego co robię. Coś co już jest dobre,
                        nie o znacza, że nie może być lepsze, dlatego starannie wykonuję swoją pracę i stale zarażam gości dobrym humorem i
                        uśmiechem.
                    </SectionParagraph>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};
