import React from 'react';
import PropTypes from 'prop-types';
import {
    Overlay,
    ContentWrapper,
    ImageWrapper,
    ImageDisplayer,
    ImagesListWrapper,
    ImagesList,
    IconWrapper,
    SingleImageWrapper,
} from './Gallery.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import CloseIcon from 'assets/icons/close.svg';
import RightArrow from 'assets/icons/thinRightArrow.svg';
import LeftArrow from 'assets/icons/thinLeftArrow.svg';
import { isDesktop } from 'utils/isDesktop';

export const Gallery = ({ closeGallery, items, firstActive }) => {
    const { allContentfulGaleria } = useStaticQuery(query);

    const totalImages = items.length;
    console.log(totalImages);

    const [activeImage, setActiveImage] = React.useState(firstActive);
    const [imagesListPosition, setImagesListPosition] = React.useState();
    const [hideImage, setHideImage] = React.useState(false);

    React.useEffect(() => {
        if (totalImages > 6) {
            if (totalImages - activeImage < 8) {
                setImagesListPosition(totalImages - 7);
            }
            if (activeImage - imagesListPosition > 6 && !(totalImages - activeImage < 8)) {
                setImagesListPosition(activeImage - 2);
            }
            if (activeImage - imagesListPosition < 1) {
                setImagesListPosition(activeImage - 1);
            }
        }
    }, [activeImage]);

    const setImage = (index) => {
        setHideImage(true);
        setTimeout(() => {
            setActiveImage(index);
            setHideImage(false);
        }, 150);
    };

    const increment = () => {
        setHideImage(true);
        setTimeout(() => {
            setActiveImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
            setHideImage(false);
        }, 150);
    };
    const decrement = () => {
        setHideImage(true);
        setTimeout(() => {
            setActiveImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
            setHideImage(false);
        }, 150);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') decrement();
        if (e.key === 'ArrowRight') increment();
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Overlay>
            <ContentWrapper>
                <IconWrapper top={0} right={0} onClick={closeGallery}>
                    <CloseIcon />
                </IconWrapper>
                <ImageWrapper>
                    <IconWrapper top={'50%'} left={0} transform="translateY(-50%)" onClick={decrement}>
                        <LeftArrow />
                    </IconWrapper>
                    <IconWrapper top={'50%'} right={0} transform="translateY(-50%)" onClick={increment}>
                        <RightArrow />
                    </IconWrapper>
                    <ImageDisplayer hideImage={hideImage}>
                        <GatsbyImage
                            image={items[activeImage].node.image.gatsbyImageData}
                            objectFit="contain"
                            style={{ width: '100%', height: '100%' }}
                            imgStyle={{ objectFit: 'contain' }}
                            alt="contact-image"
                        />
                        {items[0].node.title && items[0].node.createdAt && (
                            <figcaption>
                                <h3>{items[activeImage].node.title}</h3>
                                <time>{items[activeImage].node.createdAt}</time>
                            </figcaption>
                        )}
                    </ImageDisplayer>
                </ImageWrapper>
                {isDesktop() && (
                    <ImagesList>
                        <ImagesListWrapper position={imagesListPosition}>
                            {items.map((item, index) => {
                                const image = item.node;

                                return (
                                    <SingleImageWrapper key={index} active={activeImage === index} onClick={() => setImage(index)}>
                                        <GatsbyImage
                                            image={image.image.gatsbyImageData}
                                            objectFit="cover"
                                            style={{ width: '100%', height: '100%' }}
                                            imgStyle={{ objectFit: 'cover' }}
                                            alt={image.title + index}
                                        />
                                    </SingleImageWrapper>
                                );
                            })}
                        </ImagesListWrapper>
                    </ImagesList>
                )}
            </ContentWrapper>
        </Overlay>
    );
};

Gallery.propTypes = {
    firstActive: PropTypes.number.isRequired,
    closeGallery: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const query = graphql`
    query {
        allContentfulGaleria {
            nodes {
                image {
                    gatsbyImageData
                }
            }
        }
    }
`;
