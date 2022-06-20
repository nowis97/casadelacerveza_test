import styled from "styled-components";
import {theme} from "../../core/theme";
import {useCurrency} from "../../core/utils/currency";
import {SyntheticEvent} from "react";

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-height: 30rem;
  max-width: 20rem;
  border-radius: ${theme.borderRadius};
  background-color: #ffff;
  padding: 1rem;
`

const ProductSeparator = styled.hr`
  color: rgba(47, 47, 47, 0.89);
  height: 1px;
  width: 100%;
`

const ProductTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`   

const ProductPrice = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bolder;
`

export const ProductImage = styled.img`
  height: auto;
  width: 15rem;
  aspect-ratio: 1/1;
  object-fit: cover;
`

const Button = styled.button`
  background-color: ${theme.primaryColor};
  min-width: 5rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;

  &:hover {
    background-color: ${theme.hoverColor};
    color: ${theme.primaryColor}
  }
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

interface Props {
    title: string;
    imgUrl: string;
    price: number;
    description: string;
}

export default function ProductCard({price, title, imgUrl, description}: Props) {
    const currency = useCurrency();
    const onError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/no-product.png'
    }
    return (
        <ProductContainer>
            <ProductImage src={imgUrl} alt={description} onError={onError}/>
            <ProductSeparator/>
            <ProductTitle>
                {title}
            </ProductTitle>
            <ProductPrice>
                {currency(price)}
            </ProductPrice>
            
            <ContainerButtons>
                <Button>-</Button>
                <Button>+</Button>
            </ContainerButtons>
            
        </ProductContainer>
    )
}