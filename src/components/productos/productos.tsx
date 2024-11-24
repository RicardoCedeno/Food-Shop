import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import {product} from '../../interfaces/product'
import productsData from '../../utils/products.json'
import { useNavigate } from 'react-router-dom'; //


const Productos: React.FC = () =>{
    const navigate = useNavigate();
    const [products, setProducts] = useState<product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>()
    
    const getProducts= async ()=>{
        setLoading(true);
        try{
            setProducts(productsData);
        }
        catch(error: any){
            setError(error.message || "error al obtener el json")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    })

    const handleProductClick = (product: product) =>{
        navigate(`/detalles/${product.id}`)
    }

    return(
        <div>
            <div className="grid gap-2 justify-content-center alignt-items-center">{products?.map((product)=>(
                <div className="w-full sm:w-12 md:w-5 lg:w-2">
                    <div className="flex justify-content-center align-items-center">
                    <div key={product.id} onClick={() => handleProductClick(product)}>
                    <div style={{maxWidth: '400px'}}><img className="product-image" style={{width: '100%'}} loading="lazy" src={product.image} alt="" /></div>
                    <div className="product-name-text">{product.name}</div>
                    <div className="product-price-text">${product.price}</div>
                    <div className="text-center"><Button label="Agregar al carrito" className="button-primary"></Button> </div>
                    </div>
                </div>
                </div>
            ))}</div>
        </div>
    )
}

export default Productos