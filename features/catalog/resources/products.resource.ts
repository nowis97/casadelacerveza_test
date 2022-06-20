const apiUrl = process.env['NEXT_PUBLIC_API_URL'];

const urlProducts = new URL(`${apiUrl}/products`);

const get = async (): Promise<Array<unknown>> => fetch(urlProducts).then(res => res.json());


const getRecommendationsById = async (productId: number): Promise<Array<unknown>> => {
   const urlQuery = new URL(urlProducts)
   urlQuery.searchParams.append('product_id', String(productId));
   
   return fetch(urlQuery).then(res => res.json());
}

export {get, getRecommendationsById}