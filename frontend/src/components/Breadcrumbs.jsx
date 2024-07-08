import React from "react";
import next from '../../public/breadcrum.svg';

const Breadcrumbs = ({product}) => {
  return (
    <nav class="flex" aria-label="Breadcrumb" className="text-sm">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
            Home
        </li>
        <li>
          <div class="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              Products
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              {product?.category}
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              {product?.brand}
          </div>
        </li>
        
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
