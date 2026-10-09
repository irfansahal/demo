import Image from "next/image";

interface SelectedNews {
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

const SelectedNews = async () => {
    
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const data = await res.json();

    console.log("নির্বাচিত ", data.data[1]);
    
    const selectedNew : SelectedNews[] = data.data[1].articles;
    console.log("selectedNew",selectedNew);
    


    return(
        
        <div className="grid grid-cols-3 gap-2 pr-2">
           {selectedNew.map((item :SelectedNews , index : number)=>{
            return(
            
                 <div key={index}  className="card bg-base-100  shadow-sm">
  <figure>
    <Image
      src={item.imageUrl}
       alt={item.imageAlt}
       width={300}
   height={200}
   className="h-[180px]"
      />
  </figure>
  <div className="card-body px-3">
    <h2 className="card-title text-[18px] font-semibold ">{item.title}</h2>
    <p>{item.description.slice(0, 80)}</p>
   
  </div>
</div>
                
            )
           })}

        </div>
        
    )
}

export default SelectedNews