import react, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { category } from '../../interfaces/category';
import categoriesData from '../../utils/categories.json'
import 'primeflex/primeflex.css';
import { product } from '../../interfaces/product';
import productsData from '../../utils/products.json'
import { Button } from 'primereact/button';
        
const MainInicio: React.FC = () =>{
    const [selectedCategory, setSelectedCategory] = useState<category>(); 
    const [categories, setCategories] = useState<category[]>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);  
    const [productName, setProductName] = useState<string>();

    const getCategories = async() =>{
        setLoading(true);
        try{
            // const response: Response = await fetch(categoriesData)
            // if(!response.ok) throw new Error("Error al obtener categorías");
            // const dataCategories = await response.json();
            setCategories(categoriesData);
        }
        catch(error: any){
            setError(error.message || "error al obtener el json");
        }
        finally{
            setLoading(false)
        }
    }

    

    useEffect(() =>{
        getCategories();
    }, [])

    return(
        <div className='grid justify-content-center gap-4 mt-6'>
            <Dropdown className='col-12 sm:col-4 md:col-3' options={categories} optionLabel="name" placeholder='Seleccionar categoría' onChange={(e)=>setSelectedCategory(e.value)} value={selectedCategory} filter></Dropdown>
            <InputText className='col-12 sm:col-4 md:col-3' placeholder='¿Qué buscas hoy?' onChange={(e)=>e.target.value} value={productName}></InputText>
            <Button className='button-primary col-12 sm:col-4 md:col-2 lg:col-1' label='Buscar'></Button>
        </div>
    )
}

export default MainInicio;
