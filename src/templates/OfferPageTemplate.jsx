import { graphql } from 'gatsby';
import React from 'react';
import { Welcome, MoreInformations, Drinks, Contact } from '../layouts/Offerpage';

const OfferPage = (data) => {
    const offer = data.data.contentfulOferty;

    return (
        <>
            <Welcome title={offer.title} description={offer.description.description} image={offer.image.gatsbyImageData} />
            <MoreInformations moreInformations={offer.moreInformation.moreInformation} image={offer.secondimage.gatsbyImageData} />
            <Drinks about={offer.aboutdrinks.aboutdrinks} drinks={offer.drinks} />
            <Contact phonenumber={data.data.phonenumber.content} email={data.data.email.content} />
        </>
    );
};

export const query = graphql`
    query getOffer($title: String) {
        contentfulOferty(title: { eq: $title }) {
            title
            description {
                description
            }
            image {
                gatsbyImageData
            }
            moreInformation {
                moreInformation
            }
            secondimage {
                gatsbyImageData
            }
            aboutdrinks {
                aboutdrinks
            }
            drinks {
                name
                description {
                    description
                }
                image {
                    gatsbyImageData
                }
            }
        }
        phonenumber: contentfulDaneKontaktowe(contactid: { eq: "Numer telefonu" }) {
            content
        }
        email: contentfulDaneKontaktowe(contactid: { eq: "Adres e-mail" }) {
            content
        }
    }
`;

export default OfferPage;
