import styled from "styled-components";

export const ProductListContainer = styled.section`
    display: grid;
    gap: 1rem;
    grid-auto-rows: 25rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`