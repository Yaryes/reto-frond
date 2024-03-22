import IconMenu from '../assets/images/icon-menu.svg'
export const NavBar = () => {
  return (
    <>
        <ul className='bg-slate-200 hidden sm:flex text-[20px] md:text-[15px] 
            sm:w-[440px] sm:place-content-around items-center'>
            <li ><a href="">Inicio</a></li>
            <li ><a href="">Populares</a></li>
            <li ><a href="">Tendencias</a></li>
            <li ><a href="">Categorias</a></li>
        </ul>
        <img className='w-10 h-4 cursor-pointer sm:hidden items-center' src={IconMenu} alt="econo" />
    </>
  )
}
