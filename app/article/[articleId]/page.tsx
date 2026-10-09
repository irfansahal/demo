import Image from "next/image";



const Article = async ({params} : {params : Promise<{ articleId: string}>}) => {
    const { articleId } = await params

     const res = await fetch(`https://news-api-v2.vercel.app/api/article/${articleId}`)
     const data = await res.json();
     
     console.log(data.data.body);
     
     const articles = data.data.body

    return(
    <>
    <div className="w-[900px] mx-auto">
    {articles.map((item, index)=>{
        if(item.type==="image"){
            return <Image key={index} src={item.url} alt={item.caption} width={2121} height={1193} className="p-6"></Image> 
        }else{
            return <p key={index}>{item.text}</p>
        }
    })}
    </div>
    </>
    )
}
export default Article