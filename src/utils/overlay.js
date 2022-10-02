export const overlay = (alpha) => {
    return `
        &::after{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: ${alpha ? `rgba(0,0,0,${alpha})` : 'rgba(0,0,0,0.2)'};
        }
    `
}