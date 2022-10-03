import media from "utils/media"

export const theme = {
    color: {
        black: '#303030',
        white: '#FEFEFE',
        gray: '#F1F1F1',
        text: '#5F5F5F'
    },
    font: {
        family: 'Poppins, sans-serif',
        size: {
            mobile: {
                heroHeading: '3.2rem',
                heading: '2.8rem',
                ofertHeading: '2.4rem',
                articleHeading: '1.6rem',
                heroParagraph: '1.6rem',
                paragraph: '1.2rem',
                featuresParagraph: '1rem',
                ofertParagraph: '1.4rem',
                testimetionalsParagraph: '1.6rem',
                navitem: '2.2rem',
                blockquote: '1.5rem',
            },
            desktop: {
                heroHeading: '5.6rem',
                heading: '4.4rem',
                smallHeading: '4rem',
                articleHeading: '1.6rem',
                ofertHeading: '2rem',
                heroParagraph: '1.6rem',
                paragraph: '1.4rem',
                featuresParagraph: '1.2rem',
                testimetionalsParagraph: '2.2rem',
            },
        }
    },
    mq: {
        tablet: `@media (min-width: ${media.TABLET}px)`,
        desktop: `@media (min-width: ${media.DESKTOP}px)`,
        bigdesktop: `@media (min-width: ${media.BIGDESKTOP}px)`,
        large: `@media (min-width: ${media.LARGE}px)`,
    },
    transition: {
        navcart: '.2s ease'
    },
    zindex: {
        header: 9999,
        navcart: 999,
        pagination: 2,
        visiblecontent: 1,
        hiddencontent: 0,
    },
    height: {
        mobileHeader: '80px'
    }
}