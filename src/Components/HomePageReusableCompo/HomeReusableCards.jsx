function HomeReusableCard({ item1, item2, item3, item4, bgColor, BoxColor,IconColor }) {
    return (
      <>
        <div className={`card ${bgColor} lg:w-80 lg:h-80 shadow-2xl text-left`}>
          <div className="card-body">
            <div className={`w-10 h-10 rounded-md ${BoxColor} flex justify-center items-center text-xl md:text-2xl  ${IconColor}`}>{item1}</div>
            <div className=" space-y-4 mt-2">
            <h2 className="card-title font-bold ">{item2}</h2>
            <p className=" text-sm">{item3}</p>
            <div className="font-bold">{item4}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HomeReusableCard;
  