import React from 'react'
import photo from '../../assets/proud-little-boy-with-glasses-graduation-cap-removebg-preview 1.png'
import { useTranslation } from 'react-i18next';

const Hero = () => {
        const { t } = useTranslation();
    
  return (
    <div className='container mx-auto flex justify-between items-center mb-36'>
        <div className='flex flex-col gap-12'>
            <h1 className='text-[40px] leading-100% font-bold space-y-2'><span className='text-purple-500 text-4xl leading-[100%] font-semibold'>The Best Future Stars </span>{t("Hero.title")}</h1>
            <p className='text-[18px] font-normal leading-100%'>{t("Hero.desc")}</p>
            <div className='flex gap-6'>
            <button className='bg-[#6347EB] w-[220px] h-[78px] py-2 text-center rounded-[10px] text-[32px] text-[#FFFFFF] leading-[100%] font-medium'>{t("Hero.btn")}</button>
            <button className='border border-[#6347EB] w-[220px] h-[78px] py-2 text-center rounded-[10px] text-[32px] text-[#515151] leading-[100%] font-medium'>{t("Hero.btn2")}</button>
            </div>
        </div>
        <div className='relative'>
            <img className='absolute top-4 right-20 w-[888px] h-[475px]' src={photo} alt="" />
            <div className='bg-[#EDEBFA] rounded-t-full w-[645px] h-[325px]  mt-42'></div>
        </div>
    </div>
  )
}

export default Hero