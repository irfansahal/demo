
interface MostReadable {
      id: string,
      title: string,
      description: string | null,
      link: string,
      imageUrl: string | null,
      imageAlt: string | null,
      category: string,
      type: string,
      isLive: boolean,
      firstPublished: string | null,
      lastPublished : string | null,
      source : string ,
      rank: number

}

const MostReadableSection = async () => {
  
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json()

    console.log("Most Read",data.data);
    
    const mostRead : MostReadable[] = data.data

   return(
    <>
    <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-lg text-black   tracking-wide">সর্বাধিক পাঠিত</li>
  
  {mostRead.map((item : MostReadable, index : number)=>{
    return(
    <li className="list-row" key={index}>
       <span className="text-red-500 font-bold text-[18px]">{index+1}</span><h1 className="font-bold text-[18px]">{item.title}</h1>
     </li>
    )
  })}  
</ul>
    </>
   )
}

export default MostReadableSection