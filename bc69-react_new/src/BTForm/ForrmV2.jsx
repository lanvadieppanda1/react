import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { btFormAction } from "../storeReduxToolkit/BTForm/slice";

export const ForrmV2 = () => {
  const { productEdit } = useSelector((state) => state.btFormReducer);

  //mặc định là onSubmit
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    //mode validation
    //onchange:validate khi onchange
    //onblur:validate khi out focus khỏi input
    //onSubmit:validate khi submit
    mode: "onChange",
    //đưa giá trị vào những input của forrm
    values: productEdit,
  });

  console.log("errors: ", errors);
  const dispatch = useDispatch();

  console.log("RENDER");

  const onSubmit = (values) => {
    // khi errors có giá trị onDSubmit ko được thực thi
    console.log("values: ", values);

    // create
    dispatch(btFormAction.setProductList(values));
  };

  // useEffect(() => {
  //   if (!productEdit) return;
  //   reset(productEdit);
  // }, [productEdit]);

  return (
    <div>
      <p className="p-3 fs-2 bg-dark text-white">Product Info</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <p>ID</p>
            <input
              placeholder="ID"
              type="text"
              className="form-control"
              {...register("id", {
                required: "ID is required",
                minLength: {
                  value: 6,
                  message: "ID must be at least 6 characters long",
                },
                maxLength: {
                  value: 10,
                  message: "ID must not be more than 10 characters long",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "ID must be a number",
                },
              })}
            />
            {errors?.id && <p className="text-danger">{errors?.id?.message}</p>}
          </div>
          <div className="col-6">
            <p>Image</p>
            <input
              placeholder="Image"
              type="text"
              className="form-control"
              {...register("image", {
                required: "Image is required",
                pattern: {
                  value:
                    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                  message: "Invalid image URL",
                },
              })}
            />
            {errors?.image && (
              <p className="text-danger">{errors?.image?.message}</p>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <p>Name</p>
            <input
              placeholder="Name"
              type="text"
              className="form-control"
              {...register("name")}
            />
          </div>
          <div className="col-6">
            <p>Product Type</p>
            <input
              placeholder="Product type"
              type="text"
              className="form-control"
              {...register("productType")}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <p>Price</p>
            <input
              placeholder="Price"
              type="text"
              className="form-control"
              {...register("price")}
            />
          </div>
          <div className="col-6">
            <p>Description</p>
            <input
              placeholder="Description"
              type="text"
              className="form-control"
              {...register("desc")}
            />
          </div>
        </div>
        <div className="mt-3">
          {!productEdit ? (
            <button className="btn btn-success">Create</button>
          ) : (
            <button className="btn btn-warning ms-3">Update</button>
          )}
        </div>
      </form>
    </div>
  );
};
