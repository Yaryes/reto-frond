import { ListTimeContainer } from './components/ListTimeContainer'
import { MainArticule } from './components/MainArticule'
import { Myheader } from './components/Myheader'
import { NewContainer } from './components/NewContainer'

export const App = () => {
  return (
    <>
    <main className='p-4 '>
      <Myheader></Myheader>
      <div className='sm:flex mb-5 sm:gap-8'>
        <MainArticule></MainArticule>
        <NewContainer></NewContainer>
      </div>
      <div className='mt-2'>
        <ListTimeContainer></ListTimeContainer>
      </div>
    </main>
    </>
  )
}
