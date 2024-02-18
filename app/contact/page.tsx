
import { PrismaClient } from '@prisma/client'
import React from 'react';

const  Contact = async () => {
  const prisma= new PrismaClient()
  const posts=await prisma.post.findMany();
  
  return (
    <div> 

       {posts.map((post) => (

        <div className="card w-96 bg-base-100 shadow-xl">
       <div className="card-body" key={post.id}>
         <p className="card-title" >{post.title}</p>
         <textarea className="textarea bg-white textarea-accent" placeholder="Bio" value={post.body}></textarea>
       </div>
     </div>
          ))}

   </div>
  )
}

export default Contact