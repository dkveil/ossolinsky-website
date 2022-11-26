import React from 'react';
import { ArticleTitle, ArticleContent, ShareSocials, OtherArticles } from 'layouts/Articlepage';
import { Gallery } from 'components/Gallery';
import { SEO } from 'components/SEO';
import { useFooterThemeContext } from 'context/footerThemeContext';
import { useTheme } from 'styled-components';

const ArticlePage = (data) => {
    const { title, image, category, articlecontent, date, gallery, otherarticles } = data.pageContext;
    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
    const [firstGalleryItem, setFirstGalleryItem] = React.useState(null);
    const { setMobileBackgroundColor, setDesktopBackgroundColor } = useFooterThemeContext();
    const theme = useTheme();

    React.useEffect(() => {
        if (isGalleryOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => (document.body.style.overflow = 'unset');
    }, [isGalleryOpen]);

    const openGallery = (index) => {
        setFirstGalleryItem(index);
        setIsGalleryOpen(true);
    };

    React.useEffect(() => {
        setMobileBackgroundColor(theme.color.white);
        setDesktopBackgroundColor(theme.color.white);
    }, []);

    return (
        <>
            <ArticleTitle title={title} image={image} date={date} category={category} />
            <ArticleContent articlecontent={articlecontent} gallery={gallery} openGallery={openGallery} />
            <ShareSocials title={title} media={image.images.fallback.src} />
            <OtherArticles articles={otherarticles} />
            {isGalleryOpen && (
                <Gallery closeGallery={() => setIsGalleryOpen(false)} items={gallery} firstActive={firstGalleryItem} title={title} />
            )}
        </>
    );
};

export const Head = (data) => {
    const { title, shortdescription, imageurl, slug } = data.pageContext;

    return <SEO title={title + ' - Ossolinsky.pl'} description={shortdescription} image={imageurl} slug={`/blog/${slug}`} />;
};

export default ArticlePage;
