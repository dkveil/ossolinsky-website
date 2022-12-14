import media from "utils/media"

export const theme = {
    color: {
        black: '#303030',
        white: '#FEFEFE',
        gray: '#F1F1F1',
        text: '#5F5F5F',
        navhover: '#5F5F5F',
        transitionposition: '36%',
        category: '#7E7F83'
    },
    font: {
        family: 'Poppins, sans-serif',
        authograph: 'Dancing Script, cursive',
        size: {
            mobile: {
                heroHeading: '3.2rem',
                heading: '2.8rem',
                ofertHeading: '2.4rem',
                articleHeading: '1.6rem',
                subpageHeading: '3.2rem',
                heroParagraph: '1.6rem',
                paragraph: '1.2rem',
                featuresParagraph: '1rem',
                ofertParagraph: '1.4rem',
                testimetionalsParagraph: '1.6rem',
                navitem: '2.2rem',
                blockquote: '1.5rem',
                heading404: '9.2rem',
                paragraph404: '1.6rem',
            },
            tablet: {
                heading: '3rem',
                ofertHeading: '2.4rem',
                ofertParagraph: '1rem',
                subpageHeading: '4.2rem',
                blockquote: '1.5rem',
                heading404: '',
                paragraph404: '',
            },
            desktop: {
                heroHeading: '5rem',
                heading: '4.4rem',
                smallHeading: '4rem',
                articleHeading: '1.6rem',
                ofertHeading: '2rem',
                subpageHeading: '5.6rem',
                heroParagraph: '1.6rem',
                ofertParagraph: '1.2rem',
                paragraph: '1.4rem',
                featuresParagraph: '1.2rem',
                testimetionalsParagraph: '2.2rem',
                blockquote: '2rem',
                heading404: '22rem',
                paragraph404: '3.2rem',
            },
            large: {
                heroHeading: '5.2rem',
            }
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
        alerts: 9999999,
        cookiesinfo: 999999,
        gallerydisplayer: 99999,
        header: 9999,
        navcart: 999,
        pagination: 2,
        visiblecontent: 2,
        hiddencontent: 1,
    },
    height: {
        mobileHeader: '70px',
        desktopHeader: '80px'
    },
    width: {
        desktopherovideo: '61vw'
    }
}