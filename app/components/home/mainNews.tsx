import Image from "next/image";

interface MainNews {
    id: string,
    title : string,
    description: string,
    link: string,
    imageUrl: string,
    imageAlt : string,
    category : string,
    type : string,
    isLive : boolean,
    firstPublished : string,
    lastPublished : string,
    source : string
}

const MainNewsSection = async () => {
 
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
    const data = await res.json()

     console.log("Main News",data.data[0].articles);

     const firstNews :MainNews = data.data[0].articles[0]; 
     
     const otherNews :MainNews[] = data.data[0].articles.slice(1)
      
     console.log("First News",firstNews);
     console.log("otherNews",otherNews);
     

     const today = new Date;
     const date = today.toLocaleString("bn-BD")
     console.log(date);
     
     return(
        <>
          <div className="col-span-2 flex gap-3">
                <div>
                    
<div className="card bg-base-100 w-100  shadow-sm">
  <figure>
   <Image
   src={firstNews.imageUrl}
   alt={firstNews.imageAlt}
   width={400}
   height={300}
   />
  </figure>
  <div className="card-body">
    <p className="text-red-600">প্রধান খোবর</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description.slice(0, 180)}</p>
    <p className="text-zinc-400 font-bold">{date}</p>
    
  </div>
</div>
                </div>

             <div>
<div className="card bg-base-100 w-100  shadow-sm">
  <div className="card-body">
   <ul>
  
     {otherNews.slice(0, 6).map((item : MainNews, index : number)=>{
        return(
        <li key={index} className="border-b-1 border-zinc-400 py-3 text-start font-semibold text-lg">
        <p className="text-red-600  text-sm">প্রধান খোবর</p>
        {item.title}
    </li>
        )
     })}
    </ul>   
  </div>
</div>
                </div>


            </div>

        </>
    )
}
export default MainNewsSection