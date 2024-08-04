//rafc
import React, { useState } from "react";

//hooks: Về bản chất nó vẫn là func, đặt tên theo quy tắc có từ khóa use
//trong func bình thường không thẻ sử dụng được hooks
//trong hook có thẻ sử dụng được 1 hook khác

//custom hook: hook tự chính mình định nghĩa

export const DemoState = () => {
  const isLogin = false;

  //1. khi muốn cập nhật lại UI dựa trên tương tác của user => tọa 1 cái state đê quản lý UI đó
  //2. để tạo 1 state =>sử dụng hook useState
  //3. useState => trả về 1 mảng gồm 2 phần tử
  //Phần tử thứ 0: Gọi state
  //phần tử thứ 1: Gọi hàm setState => Dùng để thay đổi giá trị của state
  //khi giá trị state đc thay đổi thông qua hàm setState => Component sẽ được render lại => UI sẽ được thay đổi
  //4.Khi gọi hàm setState =>truyền vào 1 giá trị mới # với giá trị state hiện tại => Compo
  //5.Trong 1 func có thể tọa nhiều state
  //6. Cú pháp:
  //const [state, setState] =useState(initialState)
  //Ở lần rendere đầu tiên của component state sẽ được gán giá trị = initialState
  //initialState: string, number, boolean, object, array, function
  //trong trường hợp initialState là func => state = giá trị trả về của func đó,
  //và function này chỉ được gọi duy nhất 1 lần ở lần render đầu tiền của component

  //ví dụ

  const [number, setNumber] = useState(1);
  console.log("number: ", number);

  // let [state, setState] = useState([1, 1, 12]);
  let [state, setState] = useState(() => {
    return { name: "abc" };
  });

  console.log("state: ", state);

  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };
  const handleLogin = () => {
    // isLogin = false;
    // console.log({ isLogin });
    setState(true);
  };

  const handleSum = () => {
    // isLogin = false;
    // console.log({ isLogin });
    setNumber(number + 1);
  };
  return (
    <div className="container mt-5">
      <h1>Demo State</h1>
      {state ? (
        <div>
          <p>Long</p>
          <button className="btn btn-success" onClick={handleLogin}>
            Đăng xuat
          </button>
        </div>
      ) : (
        <button className="btn btn-success" onClick={handleLogin}>
          Đăng nhập
        </button>
      )}

      <div className="mt-3">
        <h2>Ví dụ state</h2>
        <p className="fs-3">Number: {number}</p>
        <button className="btn btn-success" onClick={handleSum}>
          + Number
        </button>
      </div>
      <div className="mt-3">
        <h2>Hello BC69</h2>
        <p style={{ fontSize }}>
          This is a sample text with dynamic font size.
        </p>
        <button
          onClick={() => {
            setFontSize(fontSize + 2);
          }}
        >
          Increase Font Size
        </button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>
    </div>
  );
};

//func
const demoFunc = () => {};

//hook
const useDemoHook = () => {};
