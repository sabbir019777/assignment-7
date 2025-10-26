import React from "react";
import { X, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-12">
    
  <div className="max-w-7xl mx-auto border-b border-gray-700 pb-10 mb-6">
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-6 md:gap-x-10">
          
      
   <div className="col-span-1 sm:col-span-2 md:col-span-2 pr-0 md:pr-4">
    <h3 className="text-3xl font-bold mb-4">CS — Ticket System</h3>
  <p className="text-gray-400 text-sm leading-relaxed"> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and <br />
 scrambled it to make a type specimen book.
 </p>
  </div>

        
   <div>
  <h4 className="text-lg font-semibold mb-3 sm:mb-4">Company</h4>
   <ul className="space-y-2 sm:space-y-3 text-sm">
   <li>
  <a href="#" className="text-gray-400 hover:text-white transition"> About Us
   </a>
  </li>
 <li>
   <a href="#" className="text-gray-400 hover:text-white transition">Our Mission
  </a>
   </li>
  <li>
  <a href="#" className="text-gray-400 hover:text-white transition"> Contact Sales
   </a>
 </li>
   </ul>
  </div>

          {/* Services Section */}
 <div>
   <h4 className="text-lg font-semibold mb-3 sm:mb-4">Services</h4>
   <ul className="space-y-2 sm:space-y-3 text-sm">
  <li>
  <a href="#" className="text-gray-400 hover:text-white transition"> Products & Services
  </a>
  </li>
 <li>
 <a href="#" className="text-gray-400 hover:text-white transition"> Customer Stories
    </a>
     </li>
     <li>
 <a href="#" className="text-gray-400 hover:text-white transition">Download Apps</a>
 </li>
  </ul>
 </div>

        
 <div>
   <h4 className="text-lg font-semibold mb-3 sm:mb-4">Information</h4>
    <ul className="space-y-2 sm:space-y-3 text-sm">
    <li>
 <a href="#" className="text-gray-400 hover:text-white transition">  Privacy Policy
   </a>
   </li>
   <li>
   <a href="#" className="text-gray-400 hover:text-white transition"> Terms & Conditions
    </a>
</li>
   <li>
   <a href="#" className="text-gray-400 hover:text-white transition">Join Us
   </a>
</li>
  </ul>
</div>

       
       
 <div>
     <h4 className="text-lg font-semibold mb-3 sm:mb-4">Social Links</h4>
      <ul className="space-y-3 text-sm">
      <li className="flex items-center space-x-2 sm:space-x-3">
     <X className="w-5 h-5 text-white" />
 <a href="#" className="text-gray-400 hover:text-white transition">  @CS — Ticket System
     </a>
       </li>
     <li className="flex items-center space-x-2 sm:space-x-3">
   <Linkedin className="w-5 h-5 text-white" />
 <a href="#" className="text-gray-400 hover:text-white transition"> @CS — Ticket System
     </a>
   </li>
  <li className="flex items-center space-x-2 sm:space-x-3">
     <Facebook className="w-5 h-5 text-white" />
   <a href="#" className="text-gray-400 hover:text-white transition">@CS — Ticket System
    </a>
     </li>
 <li className="flex items-center space-x-2 sm:space-x-3">
   <Mail className="w-5 h-5 text-white" />
<a
    href="mailto:support@cst.com"
    className="text-gray-400 hover:text-white transition"  > support@cst.com</a>
   </li>
     </ul>
</div>
    </div>
 </div>

  <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm hover:text-gray-300">
   © 2025 CS — Ticket System. All rights reserved.
  </div>
   </footer>
  );
};

export default Footer;
