
import imagenMovil from '../assets/images/image-web-3-mobile.jpg'
import imagenDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticule = () => {
    return (
    <section className='mb-12'>
        <picture>
            <source media="(max-width: 640px)" srcSet={imagenMovil}/>
            <source media="(min-width: 640px)" srcSet={imagenDesktop}/>
            <img src={imagenMovil} alt="Articule principal" />
            <div className='sm:flex '>
                <div className='flex-1 p-6 text-[38px] font-bold'>
                    <h2>The Bright Future of Web 3.0?</h2>
                </div>
                <div className='flex-1 px-5'>
                    <p className='mb-5 mt-2'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className='bg-SoftRed w-[185px] h-[48px] hover:bg-VeryDarkBlue text-white'>Read more</button>
                </div>
            </div>
        </picture>
    </section>
  )
}
