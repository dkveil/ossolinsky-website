import React from 'react';
import { ArticleTitle, ArticleContent, ShareSocials, OtherArticles } from 'layouts/Articlepage';

const ArticlePage = (data) => {
    const { title, image, category, articlecontent, date, gallery, otherarticles } = data.pageContext;

    console.log(data.pageContext.otherarticles);

    return (
        <>
            <ArticleTitle title={title} image={image} date={date} category={category} />
            <ArticleContent articlecontent={articlecontent} gallery={gallery} />
            <ShareSocials />
            <OtherArticles articles={otherarticles} />
        </>
    );
};

export default ArticlePage;
