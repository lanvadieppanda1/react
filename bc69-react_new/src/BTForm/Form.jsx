import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormAction } from "../storeReduxToolkit/BTForm/slice";

export const Form = () => {
  const dispatch = useDispatch();

  const { productEdit } = useSelector((state) => state.btFormReducer);
  console.log("productEdit: ", productEdit);

  const [formValue, setFormValue] = useState({
    id: "",
    image: "",
    name: "",
    productType: "",
    price: "",
    desc: "",
  });
  console.log("formValue: ", formValue);

  const [formError, setFormError] = useState({});
  console.log("formError: ", formError);

  // const handleFormValue = (ev, name) => {
  //     setFormValue({
  //         ...formValue,
  //         [name]: ev.target.value,
  //     })
  // }

  const handleFormValue = () => (ev) => {
    // console.log('ev name: ', ev.target.name)
    const { name, value } = ev.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect");
    if (!productEdit) return;
    setFormValue(productEdit);
  }, [productEdit]);

  return (
    <div>
      <p className="p-3 fs-2 bg-dark text-white">Product Info</p>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log("submit");

          let errors = {};

          // validation
          // ID
          if (!formValue.id.trim().length) {
            errors.id = "Vui lòng nhập ID";
          } else if (formValue.id.length < 6 || formValue.id.length > 10) {
            errors.id = "ID phải từ 6 tới 10 ký tự";
          } else if (!/^[0-9][A-Za-z0-9 -]*$/.test(formValue.id)) {
            errors.id = "ID phải là số";
          }

          // Image
          if (!formValue.image.trim().length) {
            errors.image = "Vui lòng nhập Image";
          } else if (
            !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
              formValue.image
            )
          ) {
            errors.image = "URL không đúng";
          }

          setFormError(errors);

          if (Object.keys(errors).length) return;

          if (productEdit) {
            // update
            dispatch(btFormAction.updateProduct(formValue));
            return;
          }

          //create
          dispatch(btFormAction.setProductList(formValue));
        }}
      >
        <div className="row">
          <div className="col-6">
            <p>ID</p>
            <input
              placeholder="ID"
              type="text"
              className="form-control"
              name="id"
              value={formValue?.id} //1234
              // onChange={(ev) => {
              //     // console.log(ev.target.value)
              //     setFormValue({
              //         ...formValue,
              //         id: ev.target.value,
              //     })
              // }}
              // onChange={(ev) => handleFormValue(ev, 'id')}
              // onChange={(ev) => {
              //     console.log(ev)
              // }}
              onChange={handleFormValue()}
            />
            {formError?.id && <p className="text-danger">{formError?.id}</p>}
          </div>
          <div className="col-6">
            <p>Image</p>
            <input
              placeholder="Image"
              type="text"
              className="form-control"
              name="image"
              value={formValue?.image}
              // onChange={(ev) => {
              //     // console.log(ev.target.value)
              //     setFormValue({
              //         ...formValue,
              //         image: ev.target.value,
              //     })
              // }}
              // onChange={(ev) => handleFormValue(ev, 'image')}
              onChange={handleFormValue()}
            />
            {formError?.image && (
              <p className="text-danger">{formError?.image}</p>
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
              name="name"
              value={formValue?.name}
              // onChange={(ev) => {
              //     // console.log(ev.target.value)
              //     setFormValue({
              //         ...formValue,
              //         name: ev.target.value,
              //     })
              // }}
              onChange={handleFormValue()}
            />
          </div>
          <div className="col-6">
            <p>Product Type</p>
            <input
              placeholder="Product type"
              type="text"
              className="form-control"
              name="productType"
              value={formValue?.productType}
              onChange={handleFormValue()}
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
              name="price"
              value={formValue?.price}
              onChange={handleFormValue()}
            />
          </div>
          <div className="col-6">
            <p>Description</p>
            <input
              placeholder="Description"
              type="text"
              className="form-control"
              name="desc"
              value={formValue?.desc}
              onChange={handleFormValue()}
            />
          </div>
        </div>
        <div className="mt-3">
          {!productEdit ? (
            <button
              className="btn btn-success"
              // onClick={() => {
              //     dispatch(btFormActions.setProductList(formValue))
              // }}
            >
              Create
            </button>
          ) : (
            <button
              className="btn btn-warning ms-3"
              // onClick={() => {
              //     dispatch(btFormActions.updateProduct(formValue))
              // }}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
