import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';


const NewsCard = ({news}) => {
    console.log(news,"news");
    return (
        <div className="card bg-base-100 w- shadow-sm">     
  <div className="card-body">
     <div className='flex justify-between items-center m-4 bg-slate-200  p-4 '>
                <div className='flex gap-4 w-full '>
               <Image src={news.author?.img} alt='news.author?.name' width={40} height={40} className='rounded-full '>
              </Image>
           
                <div>
                    <h1 className='text-bold'>{news.author?.name}</h1>
                    <p className='text-xs'>{news.author?.published_date}</p>
                </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
              </div>
    <h2 className="card-title">{news.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <figure>
    <Image
      src={news.image_url}
      alt="news.image_url" 
      width={300}
      height={300}
      className='w-full'
      />
  </figure>
  <p className='line-clamp-3'>{news.details}</p>
  <div className='flex justify-between items-center'>
    <div className='flex justify-between items-center gap-4'>
        <h1 className='flex items-center gap-1'><IoIosStar className='text-lg text-yellow-300' />{news?.rating?.number}</h1>
        <h1 className='flex items-center gap-1'><FaEye />{news?.total_view}</h1>
    </div>
    <Link href={`/news/${news._id}`}>
     <button className='btn'>Show Detailes</button>
    </Link>
  </div>
  </div>
</div>
    );
};

export default NewsCard;