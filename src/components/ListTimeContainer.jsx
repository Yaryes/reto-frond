import imgNotice from '../assets/images/image-retro-pcs.jpg'
import imgNotice2 from '../assets/images/image-top-laptops.jpg'
import imgNotice3 from '../assets/images/image-gaming-growth.jpg'
import { NoticeTop } from "./NoticeTop"

export const ListTimeContainer = () => {
  return (
    <div className="flex mt-8">
        <NoticeTop src={imgNotice}  num="01" titulo="Reviving Retro PCs" descrip="How the pandemic has sparked fresh opportunities." ></NoticeTop>
        <NoticeTop src={imgNotice2} num="02" titulo="Top 10 Laptops of 2022" descrip="Our best picks for various needs and budgets."></NoticeTop>
        <NoticeTop src={imgNotice3} num="03" titulo="The Growth of Gaming" descrip="How the pandemic has sparked fresh opportunities." ></NoticeTop>
    </div>
  )
}