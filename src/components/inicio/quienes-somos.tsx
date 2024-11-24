import React from 'react'
import topImage from '../../pictures/images/main-image-2.jpeg'
import fruitsImage from '../../pictures/images/estanteria-frutas.jpeg'
import vegetablesImage from '../../pictures/images/estanteria-verduras.jpeg'
import breadsImage from '../../pictures/images/estanteria-panes.jpeg'

import lacteosImage from '../../pictures/images/estanteria-lacteos.jpeg'
import proteinasImage from '../../pictures/images/estanteria-proteinas.jpeg'
import bebidasImage from '../../pictures/images/estanteria-bebidas.jpeg'
import granosImage from '../../pictures/images/estanteria-granos.jpeg'
import aceitesImage from '../../pictures/images/estanteria-aceites.jpeg'
import snacksImage from '../../pictures/images/estanteria-snacks.jpeg'
import pastasImage from '../../pictures/images/estanteria-pastas.jpeg'
import frutosCongelados from '../../pictures/images/estanteria-frutas-congeladas.jpeg'
import { Button } from 'primereact/button'



const QuienesSomos: React.FC = () =>{
    return (
        <div className="primary-color-background" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', backgroundColor: 'white', maxWidth: '1270px' }}>
            <div><img src={topImage} style={{ maxWidth: '100%' }} alt="" loading='lazy' /></div>  
            <div className='primary-text'>¿Quienes somos?</div>
            <div className='normal-text'>
            En Food-Shop, nos apasiona ofrecer alimentos frescos, saludables y deliciosos que se adaptan a las necesidades y gustos de cada uno de nuestros clientes. Somos un equipo comprometido con la calidad, el sabor y el bienestar de todos los que confían en nuestros productos.
            Nuestra misión es brindarte opciones de comida nutritiva y sabrosa, directamente desde los mejores proveedores, para que puedas disfrutar de una experiencia única en cada bocado. Ya sea que busques una comida rápida, un snack saludable o ingredientes frescos para tu cocina, en Food-Shop encontrarás lo que necesitas con la garantía de calidad y frescura.
            Nos enorgullece formar parte de tu vida diaria, ayudándote a tomar decisiones alimenticias que promuevan tu salud y bienestar. ¡Bienvenido a Food-Shop, tu destino para disfrutar de lo mejor en alimentos!
            </div>
            <div className='primary-text'>Nuestros productos</div>

                <div className='flex justify-content-center flex-column gap-6'>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='w-full sm:w-7 lg:w-5'><img src={fruitsImage} style={{ width: '100%' }} loading='lazy' alt="" /></div>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Frutas</div>
                            <div className='normal-text'>En nuestra sección de frutas encontrarás una amplia variedad de opciones frescas y deliciosas, seleccionadas cuidadosamente para ofrecerte la mejor calidad. Desde jugosas manzanas y dulces peras hasta exóticas frutas tropicales, cada una es cultivada con el mayor cuidado para garantizar su frescura y sabor. Perfectas para preparar batidos, postres o disfrutar como un snack saludable, nuestras frutas son el complemento ideal para un estilo de vida balanceado. ¡Descubre lo mejor que la naturaleza tiene para ofrecer en cada bocado!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                    </div>

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Vegetales</div>
                            <div className='normal-text'>En nuestra sección de verduras, encontrarás una selección variada de vegetales frescos y nutritivos, cultivados de manera responsable para brindarte la mejor calidad. Desde crujientes zanahorias y frescas lechugas hasta brócolis llenos de vitalidad, nuestras verduras son ideales para preparar platos saludables y llenos de sabor. Cada producto ha sido cuidadosamente escogido para garantizar su frescura y aportar los nutrientes esenciales que tu cuerpo necesita. Perfectas para ensaladas, sopas o como acompañamiento, nuestras verduras son el complemento ideal para llevar una alimentación balanceada. ¡Descubre el placer de cocinar con ingredientes frescos y de calidad!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                        <div className='w-full sm:w-7 lg:w-5'><img src={vegetablesImage} style={{ width: '100%' }} alt="" loading='lazy'/></div>
                    </div>
                    

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='w-full sm:w-7 lg:w-5'><img src={breadsImage} style={{ width: '100%' }} alt="" loading='lazy'/></div>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Panes y cereales</div>
                            <div className='normal-text'>En nuestra sección de panes y cereales, encontrarás una variedad exquisita de productos ideales para complementar tu día a día. Desde panes recién horneados y crujientes hasta cereales nutritivos y llenos de energía, cada opción ha sido seleccionada para satisfacer tus necesidades y gustos. Ya sea que busques un desayuno saludable, un snack ligero o una base para tus comidas favoritas, nuestros panes y cereales son la opción perfecta. Elaborados con ingredientes de calidad, son ideales para mantener un estilo de vida equilibrado y lleno de sabor. ¡Empieza cada día con la mejor combinación de frescura y nutrición!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                    </div>

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Lacteos</div>
                            <div className='normal-text'>En nuestra sección de lácteos, te ofrecemos una selección de productos frescos y nutritivos que son esenciales para una alimentación balanceada. Desde cremosos yogures naturales y deliciosos quesos artesanales hasta leches frescas de diversas variedades, nuestros lácteos son perfectos para complementar tu dieta diaria. Todos nuestros productos son elaborados con ingredientes de la más alta calidad, cuidando cada detalle para ofrecerte lo mejor de la naturaleza. Disfruta de un snack saludable o acompáñalos con tus comidas favoritas. ¡Siente el sabor de la frescura en cada bocado con nuestra amplia gama de lácteos!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                        <div className='w-full sm:w-7 lg:w-5'><img src={lacteosImage} style={{ width: '100%' }} alt="" loading='lazy' /></div>
                    </div>

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='w-full sm:w-7 lg:w-5'><img src={proteinasImage} style={{ width: '100%' }} alt="" loading='lazy' /></div>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Proteínas</div>
                            <div className='normal-text'>Nuestra sección de proteínas ofrece una amplia variedad de carnes y productos ricos en proteínas, ideales para quienes buscan una alimentación equilibrada y saludable. Desde carnes de res, cerdo y pollo de la mejor calidad, hasta alternativas como pescados frescos y carnes magras, cada uno de nuestros productos es cuidadosamente seleccionado para garantizar su frescura y sabor. Perfectos para preparar desde platos sencillos hasta recetas gourmet, nuestras proteínas son una excelente opción para mantener una dieta rica en nutrientes esenciales. Ya sea que necesites energía para tu día a día o busques una fuente de proteína para tus entrenamientos, en nuestra sección encontrarás lo que necesitas. ¡Disfruta de lo mejor de la proteína en cada comida!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                    </div>

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Bebidas</div>
                            <div className='normal-text'>En nuestra sección de bebidas encontrarás una deliciosa variedad de opciones para todos los gustos y momentos del día. Desde refrescos y jugos naturales hasta bebidas energéticas y opciones sin azúcar, ofrecemos productos que se adaptan a tus preferencias y necesidades. Si buscas una opción refrescante o una bebida hidratante, tenemos opciones para cada ocasión, ya sea para acompañar tus comidas, disfrutar de un momento de relax o recargar energías. Además, contamos con alternativas saludables y nutritivas, perfectas para quienes buscan opciones más naturales. ¡Descubre nuestras bebidas y encuentra la perfecta para disfrutar en cualquier momento!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                        <div className='w-full sm:w-7 lg:w-5'><img src={bebidasImage} style={{ width: '100%' }} alt="" loading='lazy' /></div>
                    </div>

                    <hr className='separator'/>

                    <div className='grid gap-6 w-full align-items-center'>
                        <div className='w-full sm:w-7 lg:w-5'><img src={granosImage} style={{ width: '100%' }} alt="" loading='lazy' /></div>
                        <div className='flex flex-column w-full sm:w-4 lg:w-6 align-items-center justify-content-center box'>
                            <div className='primary-text'>Granos y semillas</div>
                            <div className='normal-text'>En nuestra sección de granos y semillas, encontrarás una selecta variedad de arroces y otros granos esenciales para tu dieta diaria. Desde el clásico arroz blanco y integral hasta opciones exóticas como el arroz jazmín o basmati, cada uno ha sido cuidadosamente elegido para ofrecerte la mejor calidad y frescura. Los granos como el arroz son una fuente de energía y fibra, ideales para acompañar cualquier platillo y proporcionar una base nutritiva en tu alimentación. Además, contamos con semillas que aportan vitaminas, minerales y ácidos grasos esenciales, perfectas para complementar tus comidas y mejorar tu salud. ¡Descubre las opciones más frescas y deliciosas para cocinar y disfrutar de una alimentación balanceada!</div>
                            <div><Button label='Ver más' className='mt-2'></Button></div>
                        </div>
                    </div>

                </div>
          </div>
        </div>
      );
    
}

export default QuienesSomos