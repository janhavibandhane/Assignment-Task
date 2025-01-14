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

        <div className="">
        <footer className="footer  border border-base-900 border-t border-l-0 border-r-0 border-b  text-base-content p-10">
        <nav>
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
      </footer>
        </div>
      </div>
    </>
  );
}
export default Footer;
