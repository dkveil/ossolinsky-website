import React from 'react';
import {
    Wrapper,
    ContentWrapper,
    ArticleContentWrapper,
    ImageWrapper,
    GalleryWrapper,
    GalleryDisplayer,
    GalleryInfo,
    GalleryImageWrapper,
    StyledArrowLeft,
    StyledArrowRight,
    SocialShareWrapper,
    SocialIconsWrapper,
} from './ArticleContent.styles';
import { Container } from 'styles/Container';
import { PropTypes } from 'prop-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getYTEmbedLink } from 'utils/getYTEmbedLink';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StyledIcon } from 'components/StyledIcon';
import FacebookIcon from 'assets/icons/facebook.svg';
import LinkedinIcon from 'assets/icons/linkedin.svg';
import MessengerIcon from 'assets/icons/messenger.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import GoogleIcon from 'assets/icons/google.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import CopyLinkIcon from 'assets/icons/share.svg';

const options = {
    renderNode: {
        [BLOCKS.HEADING_3]: (node, children) => {
            return <h3 style={{ textAlign: 'center' }}>{children}</h3>;
        },
        [BLOCKS.HEADING_4]: (node, children) => {
            return <h3>{children}</h3>;
        },
        [BLOCKS.HEADING_5]: (node, children) => {
            return <h4 style={{ textAlign: 'center' }}>{children}</h4>;
        },
        [BLOCKS.HEADING_6]: (node, children) => {
            return <h4>{children}</h4>;
        },
        [INLINES.HYPERLINK]: (node, children) => {
            if (node.content[0].value === '<YT/>') {
                return <iframe src={getYTEmbedLink(node.data.uri)} allowFullScreen></iframe>;
            } else {
                return (
                    <a target="_blank" rel="noreferrer" href={node.data.uri}>
                        {node.content[0].value}
                    </a>
                );
            }
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return (
                <ImageWrapper>
                    <GatsbyImage
                        image={node.data.target.gatsbyImageData}
                        objectFit="cover"
                        style={{ width: '100%', height: '100%' }}
                        imgStyle={{ objectFit: 'cover' }}
                        alt={node.data.target.title}
                    />
                </ImageWrapper>
            );
        },
    },
};

export const ArticleContent = ({ articlecontent, gallery }) => {
    const [activeGalleryImage, setActiveGalleryImage] = React.useState(gallery?.length > 0 ? 1 : null);

    const changeActiveGalleryImage = (type) => {
        if (type === 'decrement' && activeGalleryImage > 1) {
            setActiveGalleryImage((prev) => prev - 1);
        }
        if (type === 'increment' && activeGalleryImage < gallery?.length) {
            setActiveGalleryImage((prev) => prev + 1);
        }
    };

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <ArticleContentWrapper>{renderRichText(articlecontent, options)}</ArticleContentWrapper>
                    {gallery && (
                        <GalleryWrapper>
                            <GalleryDisplayer active={activeGalleryImage}>
                                {gallery.map((image, index) => (
                                    <GalleryImageWrapper key={index}>
                                        <GatsbyImage
                                            image={image.gatsbyImageData}
                                            objectFit="cover"
                                            style={{ width: '100%', height: '100%' }}
                                            imgStyle={{ objectFit: 'cover' }}
                                            alt={' '}
                                        />
                                    </GalleryImageWrapper>
                                ))}
                            </GalleryDisplayer>
                            <GalleryInfo>
                                <StyledArrowLeft
                                    disabled={activeGalleryImage === 1}
                                    onClick={() => changeActiveGalleryImage('decrement')}
                                />
                                <span>
                                    {activeGalleryImage}/{gallery.length}
                                </span>
                                <StyledArrowRight
                                    disabled={activeGalleryImage === gallery.length}
                                    onClick={() => changeActiveGalleryImage('increment')}
                                />
                            </GalleryInfo>
                        </GalleryWrapper>
                    )}
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

ArticleContent.propTypes = {
    articlecontent: PropTypes.object.isRequired,
    gallery: PropTypes.array,
};
