import imgNotice from '../assets/images/image-retro-pcs.jpg'

export const NoticeTop = () => {
  return (
    <div className='flex' >
        <img src={imgNotice} alt="imagen de la noticia" />
        <h2>01</h2>
        <h2>Reviving Retro PCs</h2>
        <p>What happens when old PCs are given modern upgrades?</p>
    </div>
  )
}
