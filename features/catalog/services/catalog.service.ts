import {get, getRecommendationsById} from "../resources/products.resource";
import {get as getCategoriesResource} from '../resources/categories.resource';
import {ProductDTO} from "../dto/product.dto";
import {RecommendationDTO} from "../dto/recommendation.dto";

const getProducts = async () => {
    const productsResponse = await get();
    
    return productsResponse.map((product: any) => {
        const productDto: ProductDTO = {...product};
        return productDto
    })
}

const getProductRecommendationsById = async (productId: number) => {
    const recommendationsResponse = await getRecommendationsById(productId)
    const recommendation = recommendationsResponse[0] as any;
    const recommendationDTO: RecommendationDTO = {...recommendation}
    return recommendationDTO;
}

const getCategories = async (): Promise<string[]> => {
    return getCategoriesResource();
}

const getProductsByCategory = async (category: string) => {
    const products = await getProducts();
    return products.filter(product => product.categories?.includes(category));
}

export {getProductRecommendationsById, getProducts, getCategories, getProductsByCategory}