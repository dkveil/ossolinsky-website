import React from 'react';
import { graphql, navigate } from 'gatsby';
import PageTitle from 'components/PageTitle';
import { Container } from 'styles/Container';
import { Pagination } from 'components/Pagination';
import { Wrapper, ImagesWrapper, ContentWrapper, EmptyState } from 'layouts/Gallerypage/Gallerypage.styles';
import { GalleryCard } from 'components/GalleryCard';
import { Gallery } from 'components/Gallery';
import { isBrowser } from 'utils/isBrowser';

const GalleryPage = (data) => {
    if (!isBrowser) {
        return null;
    }

    const { edges: images } = data.data.allContentfulGaleria;
    const { edges: categories } = data.data.allContentfulKategorieDlaBlogaIGalerii;
    const { allGalleryItems } = data.data;
    const { currentPage, numPages } = data.pageContext;
    const currentCategory = data.pageContext.category || null;

    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
    const [firstGalleryItem, setFirstGalleryItem] = React.useState(null);

    React.useEffect(() => {
        if (isGalleryOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => (document.body.style.overflow = 'unset');
    }, [isGalleryOpen]);

    const setPage = (i) => {
        if (i + 1 === 1) {
            navigate('/galeria');
            return;
        }

        navigate(`/galeria/${i + 1}`);
    };

    const incrementPage = () => {
        if (currentPage < numPages) {
            navigate(`/galeria/${currentPage + 1}`);
        }
    };

    const decrementPage = () => {
        if (currentPage === 2) {
            navigate('/galeria');
            return;
        }

        if (currentPage > 1) {
            navigate(`/galeria/${currentPage - 1}`);
        }
    };

    const openGallery = (index) => {
        setFirstGalleryItem(index);
        setIsGalleryOpen(true);
    };

    return (
        <>
            <PageTitle
                title="Galeria"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin tellus non eros gravida lacinia. Integer luctus nisi sodales libero vulputate cursus. Fusce vitae lacus ut lorem varius ultricies ac id dui. Nunc ex ante."
                categories={categories}
                currentCategory={currentCategory === null ? 'Wszystko' : currentCategory}
                prefix="/galeria"
            />
            <Wrapper>
                <Container>
                    <ContentWrapper>
                        <ImagesWrapper>
                            {images.length > 0 ? (
                                images.map((item, index) => {
                                    const image = item.node;

                                    return (
                                        <GalleryCard
                                            key={`${image.title} + ${index}`}
                                            title={image.title}
                                            date={image.createdAt}
                                            image={image.image.gatsbyImageData}
                                            index={index}
                                            onClickHandler={() => openGallery(index)}
                                        />
                                    );
                                })
                            ) : (
                                <EmptyState>
                                    <h2>{currentCategory === null ? 'Brak zdjęć' : 'Brak zdjęć z wybranej kategorii'}</h2>
                                    <h3>Już niebawem nowe zdjęcia</h3>
                                </EmptyState>
                            )}
                        </ImagesWrapper>
                        {numPages > 1 && (
                            <Pagination
                                active={currentPage}
                                pages={numPages}
                                numericPagination
                                setPage={setPage}
                                increment={incrementPage}
                                decrement={decrementPage}
                            />
                        )}
                    </ContentWrapper>
                </Container>
            </Wrapper>
            {isGalleryOpen && (
                <Gallery closeGallery={() => setIsGalleryOpen(false)} items={allGalleryItems.edges} firstActive={firstGalleryItem} />
            )}
        </>
    );
};

export const query = graphql`
    query galleryListQuery($skip: Int!, $limit: Int!, $category: String) {
        allContentfulKategorieDlaBlogaIGalerii(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                }
            }
        }
        allGalleryItems: allContentfulGaleria(sort: { fields: createdAt, order: DESC }, filter: { category: { name: { eq: $category } } }) {
            edges {
                node {
                    title
                    category {
                        name
                    }
                    image {
                        gatsbyImageData
                    }
                    createdAt(formatString: "DD.MM.YYYY")
                }
            }
        }
        allContentfulGaleria(
            sort: { fields: createdAt, order: DESC }
            limit: $limit
            skip: $skip
            filter: { category: { name: { eq: $category } } }
        ) {
            edges {
                node {
                    title
                    category {
                        name
                    }
                    image {
                        gatsbyImageData
                    }
                    createdAt(formatString: "DD.MM.YYYY")
                }
            }
        }
    }
`;

export default GalleryPage;
