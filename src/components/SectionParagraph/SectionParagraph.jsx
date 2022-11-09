import styled from 'styled-components';

export const SectionParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.paragraph};
    line-height: 2.8rem;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    color: ${({ theme }) => theme.color.text};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.paragraph};
        line-height: 3.2rem;
    }
`;
