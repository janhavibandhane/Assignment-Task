import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout";
import { FaSpotify } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards";
import Codeademy from "/Images/Logos/Codeademy.png"

function Testimonial(){
    return(
        <>
        <div className="md:mt-0 mt-[-10rem]">
        <HomeReusableLayout
        item1={"Testimonials"}
        item2={"What our users say"}
        item4={
            <>
            <HomeReusableCard 
            item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>Sara Thompson</div>
                   <div className="font-normal text-[0.8rem]">Product Manager</div>
                   <div className="text-green-700 flex"><FaSpotify className="mt-1 mr-1  text-xl" />Spotify</div>
            </div>}>
            
            </HomeReusableCard>
            <HomeReusableCard item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>Alex Revira</div>
                   <div className="font-normal text-[0.8rem]">Marketing Lead</div>
                   <div className="text-xl font-bold">DocuSign</div>
            </div>}>
            
            </HomeReusableCard>
            <HomeReusableCard item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>David Lee</div>
                   <div className="font-normal text-[0.8rem]">Operations Director</div>
                   <div className="flex ml-[-1rem]"><img src={Codeademy}></img></div>
            </div>}>
            
            </HomeReusableCard>
            </>
        }
        ></HomeReusableLayout>
        </div>
        </>
    )
}
export default Testimonial