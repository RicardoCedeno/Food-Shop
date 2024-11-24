import React, { useEffect, useState } from "react";
import { product } from "../../interfaces/product";
import { useParams } from 'react-router-dom';
import detailsProduct from '../../utils/products.json'
import { Button } from "primereact/button";


interface ProductoProp{
    product: product
}

const ProductoDetalle: React.FC = ()=>{
    const [product, setProduct] = useState<product>();
    const {id} = useParams();

    const productDetails = () =>{
        const oneProduct: product | undefined = detailsProduct.find(x=>x.id.toUpperCase().trim() == id?.toUpperCase().trim())
        if(oneProduct != undefined) setProduct(oneProduct)
    }

    useEffect(()=>{
        productDetails()
    })

    return(
        <div className="grid justify-content-center align-items-center gap-3">
            <div className="w-full sm:w-10 md:w-8 lg:w-6" style={{maxWidth: '400px'}}><img className="w-full" src={product?.image} alt="" /></div>
            <div className="border-1 border-500 w-6 min-w-min border-round-lg border-double p-4">
                <div className="primary-text">{product?.name}</div>
                <div>Consíguelo hoy por solo <b>${product?.price}</b></div>
                <div>{product?.description}</div>
                <div className="grid gap-2 justify-content-center mt-3">
                <div className="text-center"><Button className="primary-button" label="Agregar al carrito"></Button></div>
                <div className="text-center"><Button className="p-button-outlined" label="Comprar ahora"></Button></div>
                </div>
            </div>
        </div>
    )
}

export default ProductoDetalle