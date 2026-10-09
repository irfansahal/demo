import Image from "next/image"
import Link from "next/link"

interface CategoriesProps {
     item: {
      id: string,
      title: string,
      description: string,
      link: string,
      imageUrl: string,
      imageAlt: string,
      category: string,
      type: string,
      isLive: boolean,
      firstPublished: string,
      lastPublished: string,
      source: string
    }
}

const CategoriesCart = ({item} :CategoriesProps) => {
    
    const today = new Date 
    const date = today.toLocaleString("bn-BD")
    console.log(date);
    

    return(
        <Link href={`/article/${item.id}`}>
          <div   className="card bg-base-100  shadow-sm">
                  <figure>
                    <Image
                      src={item.imageUrl}
                       alt={item.imageAlt}
                       width={500}
                   height={300}
                   className="h-[230px]"
                      />
                  </figure>
                  <div className="card-body px-3">
                    <p className="text-red-600">{item.category}</p> 
                    <h2 className="card-title text-[18px] font-semibold ">{item.title}</h2>
                    <p>{item.description.slice(0, 80)}</p>
                    <p className="text-zinc-500 font-bold">{item.firstPublished}</p> 
                  </div>
                </div>
        </Link>
    )
}

export default CategoriesCart