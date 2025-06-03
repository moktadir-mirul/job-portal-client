import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className='py-5 max-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center '>
            <div className='flex-1 space-y-5'>
                <motion.h1
                className='text-4xl font-bold '
                initial={{  scale: 0 }}
                animate={{scale: 1}}
                transition={{duration: 3}}
            >
                    FInd your dream <motion.span animate={
                        {color: ['#fce803', '#6ffc03', '#03e8fc', '#9803fc'], transition:{duration: 2, repeat: Infinity}}
                        }>jobs</motion.span> that are few clicks away
                </motion.h1>
                <p className='font-semibold text-base'>
                    We provide diffreent kinds of Jobs and employee data. You can browse, apply and get hired from here. Get logged in and unleash the oppotunity.
                </p>
            </div>
            <div className='flex-1'>
                <motion.img
                animate={{y:[80,120,80]}}
                transition={{duration: 3, repeat: Infinity}}
                 className='max-w-sm border-blue-500 border-l-8 border-b-8 rounded-t-4xl rounded-r-4xl' src="https://img.freepik.com/free-photo/happy-multiethnic-businessmen-businesswomen-raising-hands-celebrate-boardroom_662251-160.jpg?uid=R201082686&ga=GA1.1.1676390678.1745344038&semt=ais_items_boosted&w=740" alt="" />
                <motion.img 
                animate={{x:[100,150,100]}}
                transition={{duration: 5, repeat: Infinity}}
                className='max-w-sm border-blue-500 border-l-8 border-b-8 rounded-t-4xl rounded-r-4xl' src="https://img.freepik.com/free-photo/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-modern-cozy-office_574295-5693.jpg?uid=R201082686&ga=GA1.1.1676390678.1745344038&semt=ais_items_boosted&w=740" alt="" />
            </div>
        </div>
    );
};

export default Banner;