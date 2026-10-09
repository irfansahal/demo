import Link from "next/link";

interface Link{
    "slug": string,
      "title": string,
      "topicId": string|null,
      "url": string,
      "scrapable": boolean,
}

const NavLinks = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json();
    console.log(data.data)
     
    const navs : Link[] = data.data
    const filteredNavs = navs.filter((nav :Link)=> nav.scrapable === true);
    console.log(filteredNavs)
    return(
        <>
           <li><Link href={'/'}>হোম</Link></li>
         {filteredNavs.map((nav : Link, idex:number)=>{
            return(
                <li key={idex}><Link href={`/category/${nav.slug}`}>{nav.title}</Link></li>
            )
         })}
        </>
    )
}
export default NavLinks