"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 


const RegisterPage = () => {
    const {register,handleSubmit,} =useForm ();
    const handleRegisterFunc = async(data) =>{
        console.log(data,"data");
        const {email,name,password,photo} =data;
        console.log(email,name,password,photo);

        const { data:res, error} = await authClient.signUp.email({
    name:name,
    email: email, 
    password: password,
    image: photo,
    callbackURL: "/",
  });
    console.log(res,error);
    if(error){
      alert("messase is a already exists" )
    }
    if(res){
      alert(' register sucsesfully ')
    }
     };

     const [isShowPassword,setIsShowPassword] =useState(false);

    return (
        <div className=' container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
         <div className='p-20 rounded-xl bg-white '>
                <h1 className='text-2xl font-bold mb-10'>Register your account</h1>
              <Form className="flex w-96 flex-col gap-4 space-y-4 " onSubmit={handleSubmit(handleRegisterFunc)} >
      <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 5) {
                return "Name must be at least 5 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Your name" {...register("name")} />
            <FieldError />
          </TextField> 
      <TextField
            isRequired
            type="text"
            validate={(value) => {
              if (value.length < 5) {
                return "photo must be at least 5 characters";
              }
              return null;
            }}
          >
            <Label>photo URL</Label>
            <Input placeholder="Enter your password" {...register("photo")} />
            <FieldError />
          </TextField>
     
      <TextField
        isRequired
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" {...register("email")} />
        <FieldError />
      </TextField>
      <TextField
      className="relative"
        isRequired
        minLength={8}
        type={ isShowPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" {...register("password")}/>
         <span className="absolute top-7 right-4 " onClick={() => setIsShowPassword (!isShowPassword)}>
          {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2 mb-5">
        <Button type="register" className="w-full">
          <Check />
         Register
        </Button>
      </div>
    </Form>            
         </div>
        </div>
    );
};
export default RegisterPage;