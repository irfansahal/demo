

import { notFound } from "next/navigation";
import CategoriesCart from "../../components/categoriesCard/categoriesCart";

interface Category {
      id: string;
      title: string;
      description: string;
      link: string;
      imageUrl: string;
      imageAlt: string;
      category: string;
      type: string;
      isLive: boolean;
      firstPublished: string;
      lastPublished: string;
      source: string
}
const DetailsOfCategory = async ({ params } : {params : Promise<{ categoryId: string}>}) => {
     const { categoryId } = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
     const data = await res.json();

     const categories : Category[] = data.data
     console.log("Categories",data.data);
    
     if(!categories){
      notFound()
     }

    return(
        <>
         <h1>This is category page </h1>
        <div className="grid grid-cols-3 gap-6">
        {categories.map((item: Category) => (
        <CategoriesCart item={item} key={item.id} />
      ))}
        </div> 
        </>
    )
}

export default DetailsOfCategory