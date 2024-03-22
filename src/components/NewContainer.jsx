import { NewArticule } from "./NewArticule"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-white py-[28px] px-[20px] p-5" >
        <h1 className="text-SoftOrange text-4x1 font-bold">New</h1>
        <NewArticule title="Hydrogen VS Electric Cars" subtitle="Will hydrogen-fueled cars ever catch up to EVs?"/>        
        <NewArticule title="The Downsides of AI Artistry" subtitle=" What are the possible adverse effects of on-demand AI image generation?"/>        
        <NewArticule title="Is VC Funding Drying Up?" subtitle=" Private funding by VC firms is down 50% YOY. We take a look at what that means.  "/>        
    </aside>
  )
}
