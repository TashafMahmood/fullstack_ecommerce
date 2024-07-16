import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import CustomInput from "./CustomInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full m-6">
      <Formik
        initialValues={{
          image: null,
          name: "",
          price: "",
          mrp: "",
          category: "mens",
        }}
        onSubmit={async (values) => {
          setSending(true);
          // Convert FileList to an array
          const file = values.image ? values.image[0] : null;

          // Create FormData instance and append the fields
          const formData = new FormData();
          formData.append("product_name", values.name);
          formData.append("category", values.category);
          formData.append("price", values.price);
          formData.append("mrp", values.mrp);
          if (file) {
            formData.append("image", file);
          }

          try {
            const response = await axios.post(
              "https://backend-work-self.vercel.app/api/v1/add-product",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log(response, "response");
            setSending(false);
          } catch (error) {
            console.log(error);
            setSending(false);
          }
        }}
      >
        {({ setFieldValue, handleChange, values }) => (
          <Form>
            <input
              type="file"
              name="image"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files);
              }}
            />
            <div className="my-4">
              <Field
                type="text"
                name="name"
                title="Product Name"
                onChange={handleChange}
                value={values.name}
                as={CustomInput}
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
                type="number"
                name="price"
                title="Product Price"
                onChange={handleChange}
                value={values.price}
                as={CustomInput}
              />
            </div>
            <div className="mb-4">
              <Field
                type="number"
                name="mrp"
                title="Product MRP"
                onChange={handleChange}
                value={values.mrp}
                as={CustomInput}
              />
            </div>
            {sending ? (
              <div className="bg-gray-400 px-8 py-2 rounded-md text-white w-fit">
                Adding Product...
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 px-8 py-2 rounded-md text-white hover:bg-blue-700 cursor-pointer"
              >
                Add Product
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
