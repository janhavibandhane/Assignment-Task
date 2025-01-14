import img from "/Images/image.png"
import { FaSpotify } from "react-icons/fa";
import { SiDoordash } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { FaMailchimp } from "react-icons/fa";

function Hero() {
  return (
    <>
    <div className="hero  min-h-screen md:p-10 p-5">
      <div className=" bg-base-200 hero min-h-screen flex flex-col pt-5 ">


        <div className="hero-content  text-center">
          <div className="w-full">
            <h1 className="md:text-4xl text-3xl font-bold">Effortless Task, Management <span className=" text-orange-400">Anytime</span></h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. 
            </p>
            <div className=" space-x-3 ">
            <button className="btn bg-purple-700 text-white">Request a Demo</button>
            <button className="btn bg-white ">Contact Sales</button>
            </div>
          </div>
        </div>
       
       {/* Images */}
       <div className="pt-5 p-2">
          <img src={img} className="md:w-[70rem] md:h-[30rem]"></img>
       </div>

       <div className=" text-gray-500 pt-5 font-semibold">
        We Are Trusted By
       </div>


       {/* Logos */}
       <div className="md:flex md:flex-row md:space-y-0 space-y-3 md:space-x-8 lg:space-x-14 mt-8">
       <div className=" flex md:placeholder md:text-2xl font-bold"><FaMailchimp className="md:mt-1 mr-1  text-3xl" /><span className="text-black">Mailchimp </span></div>
       <div className="text-red-500 flex md:text-2xl font-bold"><SiDoordash className="md:mt-1 mr-1  text-3xl" />DOORDASH</div>

       <div className="text-green-500 flex md:text-2xl font-semibold"><FaSpotify className="md:mt-1 mr-1  text-3xl" />Spotify</div>
            <div className="text-blue-500 flex md:text-2xl font-bold"><FaWebflow className="md:mt-1 mr-1  text-3xl" /><span className="text-black">Webflow</span></div>
       </div>


      </div>
      </div>
    </>
  );
}
export default Hero;
