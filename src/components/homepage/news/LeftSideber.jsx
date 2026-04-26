import Link from 'next/link';
import React from 'react';

const LeftSideber = ({categories,activeId}) => {
    console.log(categories,"categories");
    return (
        <div>
              <h1 className="font-bold text-3xl">All Caterogy</h1>
               <ul className="flex flex-col gap-4 mt-6">
                 {
                  categories?.news_category?.map((category) => {
                    return<li key={category.category_id} className={` ${activeId === category.category_id && "bg-purple-500 text-white"} rounded-md font-bold text-center text-md`}>
                        <Link href={`/category/${category.category_id}`} className=' block p-2'>
                        {category.category_name}</Link></li>
                   
                  })
                }
               </ul>
        </div>
    );
};

export default LeftSideber;