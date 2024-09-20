const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/rapha1232" className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://linkedin.com/in/raphael-semaan-30335a272">
            <img src="/assets/link.svg" alt="linkedin" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://instagram.com/rapha_10_03" className="w-1/2 h-1/2">
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Raphael Semaan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
