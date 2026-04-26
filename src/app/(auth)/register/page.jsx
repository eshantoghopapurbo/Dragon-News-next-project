"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
 


const RegisterPage = () => {
    const {register,handleSubmit,} =useForm ();
    const handleRegisterFunc = (data) =>{
        console.log(data,"data");
        const {email,name,password,photo} =data;
        console.log(email,name,password,photo);
     }
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
        isRequired
        minLength={8}
        type="password"
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