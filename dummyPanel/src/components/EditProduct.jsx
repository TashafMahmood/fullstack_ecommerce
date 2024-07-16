import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import CustomInput from "./CustomInput";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true); // Add loading state
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://backend-work-self.vercel.app/api/v1/get-product/${id}`
      );
      setProduct(res?.data?.product);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div className="m-6">
      {product && ( // Ensure product is not null before rendering Formik
        <Formik
          initialValues={{
            product_name: product.product_name || "",
            category: product.category || "mens",
            price: product.price,
            mrp: product.mrp,
            available: product.available,
            popular: product.popular,
            isNew: product.isNew,
          }}
          onSubmit={async (values) => {
            setUpdating(true);
            try {
              const res = await axios.put(
                `https://backend-work-self.vercel.app/api/v1/update-product/${id}`,
                values
              );
              console.log(res, "updated successfully!");
              setUpdating(false);
            } catch (error) {
              console.log(error);
              setUpdating(false);
            }
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <div className="my-4">
                <Field
                  as={CustomInput}
                  onChange={handleChange}
                  value={values.product_name}
                  name="product_name"
                  title={"Product Name"}
                />
              </div>
              <div>
                <div>Category</div>
                <Field
                  as="select"
                  name="category"
                  className="border-2 rounded-md py-2 w-[205px] cursor-pointer mb-4"
                >
                  <option value="mens">Mens</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="food-products">Food Products</option>
                  <option value="mobiles">Mobiles</option>
                </Field>
              </div>
              <div className="mb-4">
                <Field
                  as={CustomInput}
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  title={"Price"}
                  type={"number"}
                />
              </div>
              <div className="mb-4">
                <Field
                  as={CustomInput}
                  onChange={handleChange}
                  value={values.mrp}
                  name="mrp"
                  title={"MRP"}
                  type={"number"}
                />
              </div>
              <div>
                <div>Item Availability</div>
                <Field
                  as="select"
                  name="available"
                  className="border-2 rounded-md py-2 w-[205px] cursor-pointer mb-4"
                >
                  <option value="true">Available</option>
                  <option value="false">Out of Stock</option>
                </Field>
              </div>
              <div>
                <div>New Product</div>
                <Field
                  as="select"
                  name="isNew"
                  className="border-2 rounded-md py-2 w-[205px] cursor-pointer mb-4"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Field>
              </div>
              <div>
                <div>Popular Product</div>
                <Field
                  as="select"
                  name="popular"
                  className="border-2 rounded-md py-2 w-[205px] cursor-pointer mb-4"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Field>
              </div>
              {updating ? (
                <div className="bg-gray-400 text-center px-8 py-2 rounded-md text-white">
                  Updating...
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 px-8 py-2 rounded-md text-white hover:bg-green-700 cursor-pointer"
                >
                  Update Now
                </button>
              )}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditProduct;
