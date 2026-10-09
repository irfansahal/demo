import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


interface Headline {
    "id": number,
      "title": string,
      "description": string,
      "link": string,
      "imageUrl": string,
      "imageAlt": string,
      "category": string,
      "type": string,
      "isLive": boolean,
      "firstPublished": string,
      "lastPublished": string,
      "source": string
}

const Marquee = async () => {
    
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const navs : Headline[] = data.data;
    console.log(navs)

    return(
        <>
            <div className="bg-red-700 text-white p-5 flex">
            
            <div className="px-3 font-bold">সর্বশেষ </div>

        <MarqueeText direction="right" duration={10} className="py-2">
{navs.map((nav:Headline , index:number)=> {
        return(
                <span key={index}><span >{nav.title}</span><span className="px-5">●</span></span>
        )
       })}
        </MarqueeText>
       </div>
        </>
    )
}

export default Marquee