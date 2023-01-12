import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { Form, Input, Row, Col, Typography, Divider, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {authState,login} from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store";
import axios from "axios";
import url from "../../config";

const { Title } = Typography;
const SignIn :React.FC = ()=> {
  const authStateObj = useSelector((state:RootState) => state.authReducer)
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values:authState) => {
    dispatch(login(values));
  };

  useEffect(() => {
    axios.post(`${url}/users/login`,{"email":"mr.ritik99@gmail.com","password":"Ritik@123"}).then(data => console.log(data)).catch(e => console.log(e))
  }, []);
  return (
    <div className="auth-page-container">
      <Row style={{ width: "100%" }} justify="center">
        <Col md={{span:8}}>
          <div className="auth-container">
            <Title>LOG IN</Title>
            <Divider />
            <Form
              name="login"
              className="login-form"
              onFinish={onSubmit}
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  Sign In
                </Button>
                <p style={{ fontSize: "1.1rem", marginTop: "5px" }}>
                  If you are new here, click <Link to="/signup">here</Link> to
                  register.
                </p>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;