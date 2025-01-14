import { FaPlayCircle } from "react-icons/fa";

function StrimingVideo() {
  return (
    <>
      <div className="md:p-10 p-5">
      <div className="hero bg-base-200 lg:h-96 md:mb-40 mb-20 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div>
          <p className="py-6 flex text-xl">
                <FaPlayCircle className="mr-1 text-4xl text-pink-700"></FaPlayCircle> <div className=" mt-[0.2rem]">Play Now</div>
          </p>
          </div>

          <div>
            <h1 className="md:text-5xl text-3xl font-bold">Ready To Streamline Your Workflow</h1>
            <p className="py-6 lg:w-[50rem] text-wrap">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-purple-600 text-white">Get Started Now</button>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
export default StrimingVideo;
