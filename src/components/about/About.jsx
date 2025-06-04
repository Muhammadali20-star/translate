import React from 'react'
import photo from '../../assets/photo_2021-08-25_14-04-43 1.png'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    
  return (
    <div className='container mx-auto mb-30'>
        <div className='flex gap-6'>
            <img  src={photo} alt="" />
            <div className='flex flex-col gap-4'>
            <h2 className='text-[40px] leading-[36px] font-bold'>{t("About.title")}</h2>
            <p className='text-[24px] leading-[45px] font-normal text-[#000000]'>{t("About.desc")}</p>
            </div>
        </div>
        
    </div>
  )
}

export default About