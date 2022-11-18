import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, DotsWrapper, Dot } from './Pagination.styles';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';

export const Pagination = ({ pages, styles, active, setPage, increment, decrement, arrowButtons = true, numericPagination = false }) => {
    let items = [];

    for (let i = 0; pages > i; i++) {
        items = [...items, i];
    }

    return (
        <Wrapper styles={styles}>
            {arrowButtons && <ArrowLeft onClick={decrement} style={{ cursor: 'pointer' }} />}
            <DotsWrapper>
                {items.map((i) => (
                    <Dot
                        key={i}
                        isActive={!numericPagination && i === active ? true : numericPagination && i + 1 === active}
                        onClick={() => setPage(i)}
                        numeric={numericPagination}
                    >
                        {numericPagination && `${i + 1}.`}
                    </Dot>
                ))}
            </DotsWrapper>
            {arrowButtons && <ArrowRight onClick={increment} style={{ cursor: 'pointer' }} />}
        </Wrapper>
    );
};

Pagination.propTypes = {
    active: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    increment: ({ arrowButtons, increment }, componentName) => {
        if (arrowButtons === true && typeof increment !== 'function') {
            return new Error(`Provide a increment function for the ${componentName}`);
        }
    },
    decrement: ({ arrowButtons, decrement }, componentName) => {
        if (arrowButtons === true && typeof decrement !== 'function') {
            return new Error(`Provide a increment function for the ${componentName}`);
        }
    },
    setPage: PropTypes.func.isRequired,
    styles: PropTypes.object,
    arrowButtons: PropTypes.bool,
    numericPagination: PropTypes.bool,
};
