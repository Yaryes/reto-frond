export const NoticeTop = ({src, num, titulo, descrip}) => {
  return (
    <>
      <div className='flex p-1 grap-4' >
        <img className='h-32 w-32' src={src} alt="imagen de la noticia"/>
        <div className='ml-5'>
          <h2 className='text-slate-500 font-bold text-[27px]'>{num}</h2>        
          <h2 className='font-bold'>{titulo}</h2>
          <p className='text-slate-400'>{descrip}</p>
        </div>
      </div>
    </>
  )
}
