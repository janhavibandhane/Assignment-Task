function Footer() {
  return (
    <>
      <div>
        <div className="md:flex md:flex-row md:justify-between md:space-y-0 space-y-10 p-2 md:p-10">
             <div>
              <p className=" font-bold text-xl">Join our newsletter </p>
              <p className=" text-gray-500">Get updates from us weekly about project management</p>
             </div>
             <div>
             <fieldset className="form-control ">
            <div className="">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered join-item"
              />
              <button className="btn bg-green-500 join-item md:ml-[1rem] ml-1">Subscribe</button>
            </div>
          </fieldset>
             </div>
        </div>

        <div className="flex ">
        <footer className="footer md:flex md:justify-between  border border-base-900 border-t border-l-0 border-r-0 border-b  text-base-content p-10">
        <nav>
          <h6 className=" text-black font-bold text-xl">YowManage</h6>
          <a className="link link-hover font-bold">Address:</a>
          <a className="link link-hover">Lorem ipsum dolor sit amet consectetur.</a>
          <a className="link link-hover font-bold">Contact:</a>
          <a className="link link-hover">123456789</a>
          <a className="link link-hover">abc@gmail.comm</a>
        </nav>
       <div className=" flex  gap-24">
       <nav className=" flex flex-col text-slate-600">
          <h6 className="text-black font-bold">Sitemap</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Project</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav className=" flex flex-col text-slate-600">
          <h6 className=" text-black font-bold">Company</h6>
          <a className="link  link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Blog</a>

        </nav>
       </div>
        
      </footer>
        </div>
      </div>
    </>
  );
}
export default Footer;
