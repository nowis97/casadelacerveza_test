import {fireEvent, render, screen} from "@testing-library/react";

import ProductCard from "./ProductCard";
import {useCurrency} from "../../core/utils/currency";

describe('ProductCard', () => {
    it('should render a price as currency CLP', function () {
        const price = 9990;
        render(<ProductCard title={'test'} imgUrl={'product'} price={price} description={'This is a description'}/>);

        const currency = useCurrency()
        const currencyPrice = currency(price);

        const componentPrice = screen.getByText(currencyPrice);

        expect(componentPrice.textContent).toEqual(currencyPrice);
    });

    it('should img has url "no-product.png" when load error img', function () {
        render(<ProductCard title={'test'} imgUrl={''} price={0} description={'This is a description'}/>);

        const componentImg = screen.getByRole('img') as HTMLImageElement;
        fireEvent.error(componentImg);

        expect(componentImg.src).toMatch('/no-product.png')
    });
})