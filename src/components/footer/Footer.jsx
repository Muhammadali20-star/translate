import React from 'react'
import photo from '../../assets/logo (12).svg'
import photo2 from '../../assets/telegram (11) 1.svg'
import photo3 from '../../assets/instagram (9) 1.svg'
import photo4 from '../../assets/facebook (4) 1.svg'
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className='bg-blue-500'>
        <div className='container mx-auto flex justify-between items-center'>
         <img src={photo} alt="" />
         <div className='flex gap-4 items-center'>
         <h2 className='text-[20px] leading-100% font-medium text-[#FFFFFF]'>{t("footer.title")}</h2>
         <div className='flex flex-col gap-2'>
            <p className='text-[20px] leading-100% font-normal text-[#FFFFFF]'>+998971970771</p>
            <p className='text-[20px] leading-100% font-normal text-[#FFFFFF]'>+998970020771</p>
         </div>
         </div>
         <div className='flex flex-col gap-2'>
            <h2 className='text-[20px] leading-100% font-semibold text-[#FFFFFF]'>{t("footer.desc")}</h2>
            <div className='flex gap-4'>
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
            </div>
         </div>
        </div>
    </footer>
  )
}

export default Footer