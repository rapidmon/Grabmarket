import {Divider, Form, Input, InputNumber, Button, Upload} from "antd";
import "./index.css";
import { ForkOutlined } from "@ant-design/icons";
import { useState } from 'react';
import {API_URL} from "../config/constant";
import axios from "axios";

function UploadPage(){
    const onSubmit = (values) => {
        axios.post(`${API_URL}/products`, {
            name: values.name,
            description : values.description,
            seller : values.seller,
            price : parseInt(values.price),
            imgUrl : imgUrl
        }).then((result)=>{
            console.log(result);
        })
    };
    const [imgUrl, setImgUrl] = useState(null);
    const onChangeImage = (info) => {
        if(info.file.status === 'uploading'){
            return;
        }
        if(info.file.status === 'done'){
            const response = info.file.response;
            const imgUrl = response.imgUrl;
            setImgUrl(imgUrl);
        }
    }
    return (
        <div id="upload-container">
            <Form name="상품 업로드" onFinish={onSubmit}>
                <Form.Item 
                    name="upload" 
                    label={<div className="upload-label">상품 사진</div>}
                >   
                    <Upload
                     name="image"
                     action={`${API_URL}/image`}
                     listType="picture"
                     showUploadList={false}
                     onChange={onChangeImage}  
                    >
                        {
                            imgUrl ? (<img id="upload-img" src={`${API_URL}/${imgUrl}`} />
                            ) : (<div id="upload-img-placeholder">
                                    <img src="/images/icons/camera.png" />
                                    <span>이미지를 업로드해주세요</span>
                                </div>)
                        }
                    </Upload>
                </Form.Item>
                <Divider />
                <Form.Item
                    name="seller"
                    rules={[{required: true, message: '판매자 이름을 입력해주세요.'}]}
                    label={<div className="upload-label">판매자 명</div>}
                >
                    <Input 
                     className="upload-name"
                     size="large"
                     placeholder="이름을 입력해주세요." 
                    />
                </Form.Item>
                <Divider />
                <Form.Item name="name" rules={[
                        {required: true, message: '상품 이름을 입력해주세요.'}
                    ]}
                    label={
                    <div className="upload-label">상품 이름</div>
                }>
                    <Input 
                     className="upload-name"
                     size="large"
                     placeholder="상품 이름을 입력해주세요." 
                    />
                </Form.Item>
                <Divider />
                <Form.Item id="price-deco" name="price" rules={[
                    {required: true, message: '상품 가격을 입력해주세요.'}
                    ]}
                    label={
                    <div className="upload-label">상품 가격</div>
                }>
                    <InputNumber
                     defaultValue={0} 
                     className="upload-price"
                     size="large"
                     placeholder="상품 가격을 입력해주세요." 
                    />
                </Form.Item>
                <Divider />
                <Form.Item name="description" rules={[
                    {required: true, message: '상품 소개를 적어주세요.'}
                    ]}
                    label={
                    <div className="upload-label">상품 소개</div>
                }>
                    <Input.TextArea 
                     id="product-description"
                     size="large"
                     showCount
                     maxLength={300}
                     placeholder="상품 소개를 입력해주세요." 
                    />
                </Form.Item>
                <Form.Item>
                    <Button id="submit-button" size="large" htmlType="submit">
                        상품 등록하기    
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UploadPage;