import React from "react";
import next from '../../public/breadcrum.svg';

const Breadcrumbs = ({product}) => {
  return (
    <nav aria-label="Breadcrumb" className=" flex text-sm">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
            Home
        </li>
        <li>
          <div className="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              Products
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              {product?.category}
          </div>
        </li>
        {/* <li>
          <div className="flex items-center">
            <img src={next} alt="" className="w-3 h-3 mr-2"/>
              {product?.brand}
          </div>
        </li> */}
        
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
