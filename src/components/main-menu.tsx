import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


const MainMenu: React.FC = () =>{
    const [selectedItem, setSelectedItem] = useState<string | null>(null)
    const navigate = useNavigate();
    const items = [
        {
            id: 'b830d31d-e323-4529-b22f-f59c0183acff',
            label: 'Inicio',
            icon: 'pi pi-palette',
            className: selectedItem === 'b830d31d-e323-4529-b22f-f59c0183acff' ? 'selected-menu-item' : '',
            command: () => {
                navigate('/inicio');
                setSelectedItem('b830d31d-e323-4529-b22f-f59c0183acff')
            },
            items: [
                {
                    id:'147c48dd-e92a-45d0-be09-3d521081ff7f',
                    label: 'Quienes somos',
                    className: selectedItem ==='147c48dd-e92a-45d0-be09-3d521081ff7f'? 'selected-menu-item': '',
                    // url: '/quienes-somos',
                    command:() => {
                        navigate('/quienes-somos');
                        setSelectedItem('147c48dd-e92a-45d0-be09-3d521081ff7f')
                    }

                },
                {
                    id: 'e8c9e279-9d09-4e4f-95cd-f963ca7c7674',
                    label: 'Nuestro compromiso',
                    url: '/unstyled',
                    command: () =>{
                        setSelectedItem('e8c9e279-9d09-4e4f-95cd-f963ca7c7674')
                    }
                }
            ]
        },
        {
            id: 'b2d12d30-3cd1-44b2-b052-4ac820c5d375',
            label: 'Productos',
            icon: 'pi pi-link',
            className: selectedItem=='b2d12d30-3cd1-44b2-b052-4ac820c5d375'? 'selected-menu-item': '',
            command: () =>{
                navigate('/productos')
                setSelectedItem('b2d12d30-3cd1-44b2-b052-4ac820c5d375')
            }
        },
        {
            id: 'cc6787b4-3f5c-4614-808b-92fbd337cb2b',
            label: 'Mi cuenta',
            icon: 'pi pi-home',
            className: selectedItem=='cc6787b4-3f5c-4614-808b-92fbd337cb2b'? 'selected-menu-item': '',
            command: () =>{
                setSelectedItem('cc6787b4-3f5c-4614-808b-92fbd337cb2b')
            },
            items: [
                {
                    id: '02f5c462-9fad-444d-8926-2c2f0a6c6ec1',
                    label: 'Mi usuario',
                    url: '/',
                    className: selectedItem=='2f5c462-9fad-444d-8926-2c2f0a6c6ec1'? 'selected-menu-item': '',
                    command: () =>{
                        setSelectedItem('02f5c462-9fad-444d-8926-2c2f0a6c6ec1')
                    }
                },
                {
                    id: '008b19e7-3c87-4dee-aa7c-0b5c04a7725a',
                    label: 'Carrito de compras',
                    url: '/',
                    className: selectedItem=='008b19e7-3c87-4dee-aa7c-0b5c04a7725a'? 'selected-menu-item': '',
                    command: () =>{
                        setSelectedItem('008b19e7-3c87-4dee-aa7c-0b5c04a7725a')
                    }
                }
            ]
        }
    ];

    return(
        <div className='card'>
            <Menubar className='main-menu' model={items}></Menubar>
        </div>
    )
}

export default MainMenu