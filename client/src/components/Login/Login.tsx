import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { Form, Input, Row, Col, Typography, Divider, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../../store/index';
import { updateFormData, authState, signup } from "../../store/authSlice";
import axios from "axios";
import url from "../../config";


const { Title } = Typography;
const { TextArea } = Input;

const SignUp: React.FC = () => {
  const authStateObj = useSelector((state: RootState) => state.authReducer)
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: authState) => {
    dispatch(signup(values));
  };



  return (
    <>
      <div className="auth-page-container">
        <Row style={{ width: "100%" }} justify="center">
          <Col md={{ span: 8 }}>
            <div className="auth-container">
              <Title>SIGN UP</Title>
              <Divider />
              <Form
                name="signUp"
                className="signup-form"
                onFinish={onSubmit}
                size="large"
              >
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name"
                  />
                </Form.Item>
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
                    prefix={
                      <SolutionOutlined className="site-form-item-icon" />
                    }
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
                    Sign Up
                  </Button>
                  <p style={{ fontSize: "1.1rem", marginTop: "5px" }}>
                    Already a User? Click <Link to="/">here</Link> to Sign In.
                  </p>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignUp;