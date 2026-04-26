import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
  { id: 1, title: "Breaking News: New Tech Released" },
  { id: 2, title: "Sports: Bangladesh won the match" },
  { id: 3, title: "Weather: Heavy rain expected today" }
];
    return (
        <div className='flex justify-between items-center gap-4 border-gray-500 py-4 px-4 container mx-auto'>
            <button className='btn bg-red-500'>Latest</button>
            <Marquee pauseOnHover='true'speed="100">
                {
                    news.map((n)=>(
                        <span key= {n.id} > {n.title}</span>
                    ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;