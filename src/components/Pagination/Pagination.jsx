import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, DotsWrapper, Dot } from './Pagination.styles';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';

export const Pagination = ({
    pages,
    styles,
    active,
    setPage,
    increment,
    decrement,
}) => {
    let items = [];

    for (let i = 0; pages > i; i++) {
        items = [...items, i];
    }

    return (
        <Wrapper styles={styles}>
            <ArrowLeft onClick={decrement} />
            <DotsWrapper>
                {items.map((i) => (
                    <Dot
                        key={i}
                        isActive={i === active}
                        onClick={() => setPage(i)}
                    />
                ))}
            </DotsWrapper>
            <ArrowRight onClick={increment} />
        </Wrapper>
    );
};

Pagination.propTypes = {
    active: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    styles: PropTypes.object,
};
