import HomeReusableCard from "./HomeReusableCards";


function HomeReusableLayout({ item1, item2,item3,item4,Css }) {
  return (
    <>
      <div className="hero min-h-screen lg:mt-[-10rem]">
        <div className="hero-content text-center">
          <div className="">
            <div className="text-lg text-pink-600">{item1}</div>
            <h1 className="md:text-5xl text-3xl font-bold m-2">{item2}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>

            {/* Card */}
            <div className={`${Css}lg:flex lg:flex-row lg:justify-evenly flex flex-col space-y-10 lg:space-y-0 lg:space-x-8 `}>
            {item4}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeReusableLayout;
