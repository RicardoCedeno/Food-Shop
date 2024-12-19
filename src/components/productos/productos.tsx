import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import {product} from '../../interfaces/product'
import productsData from '../../utils/products.json'
import { useNavigate } from 'react-router-dom'; //
import { category } from "../../interfaces/category";
import categoriesData from '../../utils/categories.json'
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const Productos: React.FC = () =>{
    const navigate = useNavigate();
    const [products, setProducts] = useState<product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>()
    const [categories, setCategories] = useState<category[]>();
    const [selectedCategory, setSelectedCategory] = useState<category>();
    const [productName, setProductName] = useState<string>();
    const [filteredProducts, setfilteredProducts] = useState<product[]>();
    const [allProducts, setAllProducts] = useState<product[]>();

    const getCategories = async () => {
        setLoading(true);
        try{
            setCategories(categoriesData)
            // setSelectedCategory(categoriesData[0])
        }
        catch(error: any){
            setError(error.message || 'error al obtener las categorías')
        }
        finally{
            setLoading(false)
        }


    }
    
    const getProducts= async ()=>{
        setLoading(true);
        try{
            setProducts(productsData);
            setAllProducts(productsData)
        }
        catch(error: any){
            setError(error.message || "error al obtener el json")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts();
        getCategories();
    }, [])

    const handleProductClick = (product: product) =>{
        navigate(`/detalles/${product.id}`)
    }

    const searchProduct = (name: string) =>{
        setProducts(allProducts)
        if(!name || name == '') setProducts(allProducts)
        else{
        const filteredProducts = products?.filter(product=>product.name.toUpperCase().trim() == name.toUpperCase().trim())
        console.log("filteredProducts ", filteredProducts)
        setProducts(filteredProducts)
        }
    }

    const handleSearch = () =>{
        searchProduct(productName!)
        console.log("products ", products)
    }

    return(
        <div className="mt-6">
            <div className='grid justify-content-center gap-4'>
                <Dropdown options={categories} optionLabel="name" placeholder="seleccionar categoría" onChange={(e)=>setSelectedCategory(e.value)} value={selectedCategory} className=" mb-2 w-full sm:w-12 md:w-5 lg:w-2" filter></Dropdown>
                <InputText className='col-12 sm:col-4 md:col-3' placeholder="¿Qué buscas hoy?" onChange={(e)=>setProductName(e.target.value)} value={productName}></InputText>
                <Button onClick={handleSearch} className='button-primary col-12 sm:col-4 md:col-2 lg:col-1' label='Buscar'></Button>
            </div>
            <div className="grid gap-2 justify-content-center alignt-items-center">
                {selectedCategory?.id != "000"? (products?.filter(product=> selectedCategory?.id != "000" && product.categoryId.toUpperCase().trim() == selectedCategory?.id.toUpperCase().trim()).map((product)=>(
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
            ))
        ): (
            products?.map((product)=>(
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
            ))
        )}</div>
        </div>
    )
}

export default Productos