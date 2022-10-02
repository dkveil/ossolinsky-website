import React from 'react';
import {
    Wrapper,
    ContentWrapper,
    OfertsWrapper,
    OfertFeaturesList,
} from './Oferts.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button/Button';
import CheckIcon from 'icons/check.svg';
import { OfertCard } from 'components/OfertCard/OfertCard';
import { useStaticQuery, graphql } from 'gatsby';

export const Oferts = () => {
    const data = useStaticQuery(query);

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading variant="h2" color="black" margin="0 0 3rem">
                        Jaką Imprezę chcesz osłodzić?
                    </Heading>
                    <SectionParagraph margin="0 0 3rem">
                        Sprawię, aby Twoja impreza była niezapomniana, a goście
                        byli zachwyceni. Specjalizuję się głównie w barmaństwie
                        na weselach, 18stkach lub imprezach firmowych! Jeśli
                        Twoja okoliczność nie znajduje się na mojej liście, nic
                        straconego! <b>Napisz do mnie!</b>
                    </SectionParagraph>
                    <OfertFeaturesList>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                    </OfertFeaturesList>
                    <Button
                        variant="outlined"
                        isLink
                        path="/"
                        boxOverlay="bottom-left"
                    >
                        o mnie
                    </Button>
                </ContentWrapper>
            </Container>
            <OfertsWrapper>
                <OfertCard
                    title="Na Twoją 18stkę!"
                    content="Chcesz, żeby twoje urodziny różniły się od typowych 18-naste? Pojawię się za barem, a Twoi goście osłupieją!"
                    image={data.ofert18.childImageSharp.gatsbyImageData}
                    link="/"
                />
                <OfertCard
                    title="Na Wasze wesele!"
                    content="Zbliża się najważniejszy moment w waszym życiu i chcecie, żeby wszystko wypadło perfekcyjnie? Pozwólcie gościom cieszyć się pysznym drinkiem!"
                    image={data.ofertwedding.childImageSharp.gatsbyImageData}
                    link="/"
                />
                <OfertCard
                    title="Na imprezę firmową!"
                    content="Jeśli organizujesz ważne wydarzenie i nie masz pomysłu jak zadziwić swoich gości wypróbuj koniecznie barmana!"
                    image={
                        data.ofertcompanyparty.childImageSharp.gatsbyImageData
                    }
                    link="/"
                />
                <OfertCard
                    title="Inna okoliczność?"
                    content="Nic straconego! <br />Napisz do mnie, zobaczymy co da się zrobić!"
                    image={data.ofertother.childImageSharp.gatsbyImageData}
                    link="/"
                    iscontact={true}
                />
            </OfertsWrapper>
        </Wrapper>
    );
};

const query = graphql`
    query {
        ofert18: file(relativePath: { eq: "homepage/03_ofert-18.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        ofertwedding: file(
            relativePath: { eq: "homepage/04_ofert-wedding.jpg" }
        ) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        ofertcompanyparty: file(
            relativePath: { eq: "homepage/05_ofert-company-party.jpg" }
        ) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        ofertother: file(relativePath: { eq: "homepage/06_ofert-other.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
