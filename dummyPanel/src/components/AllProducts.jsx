import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `/api/v1/get-products`
      );
      setProducts(res?.data?.products);
      setCount(res?.data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products, "producs");
  useEffect(() => {
    getProducts();
    console.log('c')
  }, []);

  const deleteProduct = async (id) => {
    setSelected(id);
    setDeleting(true);
    try {
      const res = await axios.delete(
        `/api/v1/delete-product/${id}`
      );
      console.log(res, "delete response");

      if (res?.data?.success) {
        const filteredData = products?.filter((item) => item._id !== id);
        setProducts(filteredData);

        setDeleting(false);
        setSelected("");
      }
    } catch (error) {
      console.log(error);
      setDeleting(false);
      setSelected("");
    }
  };

  return (
    <div className="bg-yellow-600 h-100vh w-full pr-12">
      <div className="w-full m-6 h-90vh overflow-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sr. no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  MRP
                </th>
                <th scope="col" className="px-6 py-3">
                  Popular
                </th>
                <th scope="col" className="px-6 py-3">
                  New Product
                </th>
                <th scope="col" className="px-6 py-3">
                  In Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, id) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 w-28">{id + 1}</td>

                  <th
                    //   scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item?.product_name}
                  </th>
                  <td className="px-6 py-4">
                    <img
                      src={item?.product_image}
                      alt="afa"
                      className="w-12 h-16 object-contain"
                    />
                  </td>
                  <td className="px-6 py-4">{item?.category}</td>
                  <td className="px-6 py-4">{item?.price}</td>
                  <td className="px-6 py-4">{item?.mrp}</td>
                  <td className="px-6 py-4">
                    {item?.popular ? <span className="text-green-600">Yes</span> : <span className="text-red-600">No</span>}
                  </td>
                  <td className="px-6 py-4">
                    {item?.isNew ? <span className="text-green-600">Yes</span> : <span className="text-red-600">No</span>}
                  </td>
                  <td className="px-6 py-4">
                    {item?.available ? (
                      <span className="text-green-600">Available</span>
                    ) : (
                      <span className="text-red-600">Out of stock</span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-700 hover:bg-blue-800 rounded-md shadow-md px-4 py-2 text-white"
                      onClick={() => navigate(`/edit-product/${item._id}`)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    {deleting && item._id == selected ? (
                      <button className="bg-gray-500 rounded-md shadow-md px-3 py-2 text-white">
                        Deleting...
                      </button>
                    ) : (
                      <button
                        className="bg-red-700 hover:bg-red-800 rounded-md shadow-md px-3 py-2 text-white"
                        onClick={() => deleteProduct(item?._id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
