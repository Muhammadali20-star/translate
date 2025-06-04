import React from 'react'
import photo from '../../assets/photo_2021-08-25_14-04-43 1 (1).png'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
  return (
    <div className='container mx-auto mb-30'>
        <h2 className='text-3xl font-semibold leading-100% text-center mb-12'>{t("ToContact")}</h2>
        <div className='bg-blue-500  flex justify-between rounded-2xl px-4 py-4'>
           <div className='flex flex-col gap-6 py-3 mb-15'>
            <h2 className='text-[40px] leading-100% font-medium text-[#FFFFFF]'>{t("contact.Contacts")}</h2>
            <div className='flex gap-2 items-center'>
            <div className='w-[20px] h-[20px] bg-[#A23AC1]'></div>
            <p className='text-[#FFFFFF] text-[24px] leading-100% font-normal'>{t("contact.address")}</p>
            </div>
            <div className='flex gap-2 items-center'>
            <div className='w-[20px] h-[20px] bg-[#A23AC1]'></div>
            <p className='text-[24px] leading-100% font-normal text-[#FFFFFF]'>+998970020771</p>
            </div>
            <div className='flex gap-2 items-center'>
            <div className='w-[20px] h-[20px] bg-[#A23AC1]'></div>
            <p className='text-[24px] leading-100% font-normal text-[#FFFFFF]'>{t("contact.number")}</p>
            </div>
            <img src={photo} alt="" />
           </div>
           <div className='flex flex-col gap-4'>
            <h2 className='text-[40px] leading-100% font-medium text-[#FFFFFF]'>{t("contact.request")}</h2>
            <p className='text-[18px] leading-100% font-normal text-[#FFFFFF]'>{t("contact.celebrate")}</p>
            <p className='bg-white w-[400px] h-[52px] py-3 px-4 rounded-[5px] shadow-lg'>{t("contact.name")}</p>
            <p className='bg-white w-[400px] h-[52px] py-3 px-4 rounded-[5px] shadow-lg'>{t("contact.surname")}</p>
            <p className='bg-white w-[400px] h-[262px] py-3 px-4 rounded-[5px] shadow-lg'>{t("contact.phoneNumber")}</p>
           </div>
        </div>
    </div>
  )
}

export default Contact