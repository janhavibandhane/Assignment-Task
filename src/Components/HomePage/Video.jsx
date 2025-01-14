import vid from "/Images/Video.png"
import { FaPlayCircle } from "react-icons/fa";
function Video(){
    return(
        <>
        <div className="hero  min-h-screen md:p-10 p-5 mt-[-10rem] md:mt-0">
              <div className=" bg-base-200 hero md:min-h-screen flex flex-col pt-5 ">
        
        
                <div className="hero-content  text-center ">
                  <div className="w-full">
                    <p className="py-6 flex text-xl">
                       <FaPlayCircle className="mr-1 text-4xl text-pink-700"></FaPlayCircle> <div className=" mt-[0.2rem]">Play Now</div>
                    </p>
                    
                  </div>
                </div>
               
               {/* Images */}
               <div className="pt-5 p-2">
                  <img src={vid} className="md:w-[70rem] md:h-[30rem]"></img>
               </div>
              </div>
              </div>
        </>
    )
}
export default Video