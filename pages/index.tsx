import ProductCard from "../base/components/ProductCard";
import {getProducts, getProductsByCategory} from "../features/catalog/services/catalog.service";
import {ProductListContainer} from "../base/containers/ProductListContainer";
import SelectCategories from "../core/components/SelectCategories";
import {Container} from "../base/containers/Container";
import {useEffect, useState} from "react";
import {ProductDTO} from "../features/catalog/dto/product.dto";

const ProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        if (selectedCategory) {
            getProductsByCategory(selectedCategory).then(setProducts);
        } else {
            getProducts().then(setProducts);
        }
    }, [selectedCategory])

    return (
        <Container>
            <SelectCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ProductListContainer>
                {products.map(product =>
                    <ProductCard
                        key={product.product_id}
                        title={product.name}
                        imgUrl={product.image_url}
                        price={product.total_price}
                        description={product.description}/>)}
            </ProductListContainer>
        </Container>
    )
}

export default ProductPage