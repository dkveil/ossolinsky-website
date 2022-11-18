export const getYTEmbedLink = (link) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regExp);

    return (match && match[2].length === 11)
        ? `//www.youtube.com/embed/${match[2]}`
        : null;
}