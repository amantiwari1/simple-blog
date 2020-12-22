import React from "react";
import { TableWrapper } from "../elements";


const Table = ({ children }) => {
    return (
        <TableWrapper>
            <table>{children}</table>
        </TableWrapper>
    )
}