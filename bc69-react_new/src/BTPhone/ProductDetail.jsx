import React from 'react'

export const ProductDetail = (props) => {
    const { prdDetail } = props
    console.log('prdDetail: ', prdDetail)
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <p className="fw-bold fs-3 mb-3">{prdDetail.tenSP}</p>
                    <img className="img-fluid" src={prdDetail.hinhAnh} alt="..." />
                </div>
                <div className="col-8">
                    <p className="fw-bold fs-3 mb-3">Thông số kỹ thuật</p>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{prdDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{prdDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{prdDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{prdDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{prdDetail.ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{prdDetail.rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
