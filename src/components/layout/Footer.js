import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white lg:px-20 xl:px-0">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div>
          <div className="text-6xl font-black italic uppercase leading-tight">1Ramp</div>
          <div className="ml-2 text-lg">By <a className="border-primary border-b-2 text-primary ml-2" href="https://hapramp.com" taget="__new">HapRamp Studio</a></div>
        </div>
        <ul className="flex text-lg mt-4">
          <li className="ml-6"><a href="https://www.linkedin.com/company/13405668/" target="__new">LinkedIn</a></li>
          <li className="ml-6"><a href="https://www.facebook.com/the1ramp/" target="__new">Facebook</a></li>
          <li className="ml-6"><a href="https://www.instagram.com/the1ramp/" target="__new">Instagram</a></li>
          <li className="ml-6"><a href="https://twitter.com/the1ramp" target="__new">Twitter</a></li>
          <li className="ml-6"><a href="https://medium.com/1ramp" target="__new">Medium</a></li>
          <li className="ml-6"><a href="mailto:hi@1ramo.io">hi@1ramp.io</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;