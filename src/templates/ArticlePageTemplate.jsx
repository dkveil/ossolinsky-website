import React from 'react';
import { ArticleTitle, ArticleContent } from 'layouts/Articlepage';

const ArticlePage = (data) => {
    const { title, image, category, articlecontent, date, gallery } = data.pageContext;

    return (
        <>
            <ArticleTitle title={title} image={image} date={date} category={category} />
            <ArticleContent articlecontent={articlecontent} gallery={gallery} />
        </>
    );
};

export default ArticlePage;
