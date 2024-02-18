'use client';
import React, { useCallback } from 'react'

import { useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface postForm{
  title:string,
  body:string
}
const NewForm = () => {
    const router=useRouter();
    const {register,control,handleSubmit}=useForm<postForm>();
    console.log(register)


  return (
    <div>
    <form className='p-5' onSubmit={handleSubmit(async (data)=>{
      await axios.post('/api/new',data)
      router.push('/contact')
    })}>

        <div className="label">
        <span className="label-text pb-1">What is your name?</span></div>

        <input type="text" placeholder="Type here" {...register('title')}  className="input input-bordered w-full max-w-xs " />
        <div className="label">
        <span className="label-text pb-1">another one</span></div>
        <Controller name="body" control={control} render={({field})=><SimpleMDE placeholder='type something' {...field} />}/>
        




    <button type="submit" className="btn ml-5 btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default NewForm