import React from "react"
import { PaginationElements, PaginationWrapper } from "../elements";

export const Paginations = ({isFirst, isLast, prevPage, nextPage}) => {
        <PaginationWrapper isFirst={isFirst} isLast={isLast} >
            <PaginationElements to={prePage} > Previous Page </PaginationElements>
            <PaginationElements to={nextPage} > Next Page </PaginationElements>
        </PaginationWrapper>
}