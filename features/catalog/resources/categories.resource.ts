const apiUrl = process.env['NEXT_PUBLIC_API_URL'];

const urlCategories = new URL(`${apiUrl}/categories`);

const get = async () => fetch(urlCategories).then(res => res.json());

export {get}