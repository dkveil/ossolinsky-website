import styled from 'styled-components';

export const SectionParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.paragraph};
    line-height: 2.8rem;
    margin: ${(props) => (props.margin ? props.margin : 0)};
`;
