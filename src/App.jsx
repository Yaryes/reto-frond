import { MainArticule } from './components/MainArticule'
import { Myheader } from './components/Myheader'
import { NewContainer } from './components/NewContainer'

export const App = () => {
  return (
    <>
    <main className='p-4'>
      <Myheader></Myheader>
      <div className='sm:flex sm:gap-8'>
        <MainArticule></MainArticule>
        <NewContainer></NewContainer>
      </div>
    </main>
    </>
  )
}
