import React from 'react';
import { ArticleTitle, ArticleContent, ShareSocials, OtherArticles } from 'layouts/Articlepage';
import { Gallery } from 'components/Gallery';

const ArticlePage = (data) => {
    const { title, image, category, articlecontent, date, gallery, otherarticles } = data.pageContext;
    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
    const [firstGalleryItem, setFirstGalleryItem] = React.useState(null);

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

export default ArticlePage;
