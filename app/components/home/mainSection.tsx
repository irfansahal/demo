import BangladeshNews from "./bangladeshNews"
import HealthNews from "./healthNews"
import IndiaNews from "./indiaNews"
import MainNewsSection from "./mainNews"
import MostReadableSection from "./mostReadable"
import OtherNews from "./othersNews"
import SelectedNews from "./selectedNews"
import Videos from "./videos"
import WorldNews from "./worldNes"


const MainSection = async () => {
 
  
    return(
        <>   
         <div  className="grid grid-cols-3 gap-2">
          {/* main naws */}
            <div className="col-span-2">
            <div className=" flex gap-3">
             <MainNewsSection/>
             </div>

            {/* নির্বাচিত খোবর */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">নির্বাচিত খোবর</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
             <SelectedNews/>
            </div>

            {/* বাংলাদেশ */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">বাংলাদেশ</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
             <BangladeshNews/>
            </div>

              {/* ভারত */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">ভারত</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
               <IndiaNews/>
            </div>

             {/* বিশ্ব */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">বিশ্ব</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
               <WorldNews/>
            </div>

            {/* স্বাস্থ্য */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">স্বাস্থ্য</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
               <HealthNews/>
            </div>

            {/* ভিডিও */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">ভিডিও</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
                 <Videos/>
            </div>

                   {/* অন্যান্য খবর */}
            <div className="pt-9">
                 <h1 className="font-bold text-[18px] pb-5">অন্যান্য খবর</h1>
                 {/* <hr className="text-red-600 font-extrabold w-[810px] pt-3"></hr> */}
                 <div className=" w-[810px] bg-red-600 h-[3px] mb-5"></div>
                 <OtherNews/>
            </div>
</div>
    {/* most readable */}
            <div className="col-span-1">
                 <MostReadableSection/>
            </div>
         </div>
        </>
    )
}
export default MainSection