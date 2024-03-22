import logo  from '../assets/images/logo.svg'
import { NavBar } from './NavBar'
export const Myheader = () => {
  return (
      <>
        <header className='flex mb-5 place-content-between items-center'>
          <img src={logo} alt="Logo"/>
          <NavBar/>
        </header>
      </>
  )
}
