import React from 'react'
import AniLink from 'gatsby-plugin-transition-link'
import * as S from './styled'
import propTypes from 'prop-types'

const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage,
}) =>(
    <S.PaginationWrapper>
        {!isFirst && <AniLink to={prevPage}           to="/"
          cover = "true"
          direction="left"
          duration={0.6} >página anterior</AniLink>}

        <p>{currentPage} de {numPages}</p>
        {!isLast && <AniLink to={nextPage}           to="/"
          cover = "true"
          direction="right"
          duration={0.6}>próxima página</AniLink>}

    </S.PaginationWrapper>
)

Pagination.propTypes= {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string
}

export default Pagination