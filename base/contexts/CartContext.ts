import {ProductDTO} from "../../features/catalog/dto/product.dto";
import React from "react";

const CartContext = React.createContext<ProductDTO[]>([]);

export default CartContext;