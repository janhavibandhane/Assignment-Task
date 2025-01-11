import img from "/Images/image.png"
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
       {/* <img src="https://tse4.mm.bing.net/th?id=OIP.nZrLHqqyewGJ6VIC6n9TowHaHa&pid=Api&P=0&h=180"></img> */}
      </div>
      </div>
    </>
  );
}
export default Hero;
