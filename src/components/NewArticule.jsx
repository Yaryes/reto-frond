export const NewArticule = ({title, subtitle}) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-5
        last:border-none">
        <h1 className="hover:text-slate-400 text-[21px] font-bold mb-3">{title}</h1>
       <p className="text-[15px]">{subtitle}</p>
    </article>
  )
}
