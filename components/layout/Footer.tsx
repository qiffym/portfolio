import Link from 'next/link';
import React from 'react';

let year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral p-10 text-neutral-content">
      <div>
        <small className="text-slate-300">
          <span>Design with ❤️ by. My Self</span> <br />
          <span>Web Developement Enthusiast</span>
        </small>
        <p>Copyright &copy; {year} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
