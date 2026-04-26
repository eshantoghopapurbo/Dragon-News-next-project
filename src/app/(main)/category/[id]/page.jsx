import LeftSideber from '@/components/homepage/news/LeftSideber';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewByCategoriesId } from '@/lib/data';
import React from 'react';

   
const NewCategoryPage =async ({ params}) => {
    const {id}=await params;
    console.log(id,"paramsRes");
    const categories = await getCategories();
    const news = await getNewByCategoriesId (id);

    return  <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
            <div className="  col-span-3">
              <LeftSideber categories ={categories} activeId={id} ></LeftSideber>
              </div>
            <div className="font-bold col-span-6">
                <h2 className='text-2xl font-bold'>Dragon News Home</h2>
             <div className='mt-6 space-y-4'>
              {news.length>0?
                news.map((n) => {
                  return <NewsCard key={n._id} news={n} ></NewsCard>
                }):<h2 className='text-3xl font-bold text-center mt-50'>not found page</h2>
              }
             </div>
              </div>
            <div className=" col-span-3"><RightSidebar></RightSidebar></div>
          </div>
    
};

export default NewCategoryPage;