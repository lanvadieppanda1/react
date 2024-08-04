import React, { useEffect, useState } from "react";
import { Child } from "./Child";

export const DemoUseEffect = () => {
  // useEffect(callback,dependencies)
  // tham số call back: bắt buộc
  // tham số dependencies: có thể có hoặc ko
  // callback chỉ được thực thi khi component được render xong(tất cả các trường hợp của useEffect)
  // useEffect: luôn luôn thực thi ít nhất là 1 lần

  //Note: useEffect ở trong nhưng compoent con luôn luôn được thực thi trước những useEffect ở trong component cha chưa nó

  const [number, setNumber] = useState(1);

  const [like, setLike] = useState(1);

  //th1:useEffect sẽ được thực thi lại mỗi khi component render lại
  useEffect(() => {
    console.log("useEffect TH1");
  });

  //TH2:useEffect chỉ thực thi duy nhất 1 lần

  useEffect(() => {
    console.log("useEffect TH2");
  }, []);

  //th3:
  // useEffect chỉ thực thi khi dependencies (state, props) thay đ��i
  // ví dụ: useEffect chỉ thực thi khi số lượt like thay đ��i
  // ví dụ: useEffect chỉ thực thi khi số lượt like và number thay đ��i

  useEffect(() => {
    console.log("useEffect TH3");
  }, [number, like]);

  //TH4:CLEAN UP

  // cleanup function thực thi khi component unmount(xóa)
  // thông thường dùng để xóa các thành phần đã tạo ra khi component đã hủy hoạt đ��ng
  // ví dụ: xóa interval để đảm bảo chạy chính xác và ��n đ��nh cho component
  // ví dụ: xóa localStorage để đảm bảo dữ liệu của component đã hủy hoạt đ��ng

  useEffect(() => {
    console.log("useEffect TH4");
    const interval = setInterval(() => {
      console.log("hello BC69");
    }, 1000);
    return () => {
      //chỉ thực thi khi component bị umount (bị hủy khỏi UI,bị xóa khỏi DOM)
      console.log("useEffect TH4 cleanup");
      clearInterval(interval);
    };
  }, []);

  console.log("RENDER");

  return (
    <div>
      <h1>DemoUseEffect</h1>
      <p className="fs-2 fw-bold mb-3">number:{number}</p>

      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {" "}
        + Number
      </button>
      <p className="fs-2 fw-bold my-3">Like:{like}</p>

      <button
        className="btn btn-success"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        + Number
      </button>

      <Child />
    </div>
  );
};
