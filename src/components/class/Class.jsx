import React from 'react'
import photo from '../../assets/mozhno-li-zapisat-rebyonka-v-shkolu-ne-po-mestu-propiski 1.png'
import photo2 from '../../assets/302a81ed9b4bcc1f0ed4edeb96f31092ef81461c.jpg'
import photo3 from '../../assets/7026282fe375ddc4d689c7a349a3e1ff33878a62.jpg'
import photo4 from '../../assets/1ea473f80c6791ab4dfca1436fe85ea222dd9dcf.jpg'
import photo5 from '../../assets/9fc216d9e84dbf94878327d468bac69c3f95e2e0.jpg'
import { useTranslation } from 'react-i18next';

const Class = () => {
    const { t } = useTranslation();
    
  return (
    <div className='mb-30'>
        <h2 className='text-3xl font-semibold leading-100% text-center mb-12'>{t("class.className")}</h2>
      <div className='container mx-auto grid grid-cols-3 gap-6'>
      <div className='bg-[#5855E7] text-[#FFFFFF] p-4 flex flex-col gap-3 text-center rounded-2xl'>
        <img className='object-contain mx-auto mb-4'  src={photo} alt="" />
        <h1 className='text-3xl font-semibold leading-100%'>{t("class.firstGrade")}</h1>
        <h3 className='text-[18px] font-medium leading-100%'>{t("class.6-7yearsOld")}</h3>
        <p className='text-[14px] font-normal leading-100%'>{t("class.logopedics")}</p>
        <button className='w-[147px] h-[32px] rounded-[5px] mx-auto bg-[#FFFFFF] text-[#6347EB]'>{t("class.btn")}</button>
      </div>

      <div className='bg-[#5855E7] text-[#FFFFFF] p-4 flex flex-col gap-3 text-center rounded-2xl'>
        <img  className='object-contain mx-auto mb-4' src={photo2} alt="" />
        <h1 className='text-3xl font-semibold leading-100%'>{t("class.secondGrade")}</h1>
        <h3 className='text-[18px] font-medium leading-100%'>{t("class.7-8yearsOld")}</h3>
        <p className='text-[14px] font-normal leading-100%'>{t("class.cognition")}</p>
        <button className='w-[147px] h-[32px] rounded-[5px] mx-auto bg-[#FFFFFF] text-[#6347EB]'>{t("class.btn")}</button>
      </div>

      <div className='bg-[#5855E7] text-[#FFFFFF] p-4 flex flex-col gap-3 text-center rounded-2xl'>
        <img  className='object-contain mx-auto mb-4' src={photo3} alt="" />
        <h1 className='text-3xl font-semibold leading-100%'>{t("class.thirdGrade")}</h1>
        <h3 className='text-[18px] font-medium leading-100%'>{t("class.8-9yearsOld")}</h3>
        <p className='text-[14px] font-normal leading-100%'>{t("class.language")}</p>
        <button className='w-[147px] h-[32px] rounded-[5px] mx-auto bg-[#FFFFFF] text-[#6347EB]'>{t("class.btn")}</button>
      </div>

      <div className='bg-[#5855E7] text-[#FFFFFF] p-4 flex flex-col gap-3 text-center rounded-2xl'>
        <img  className='object-contain mx-auto mb-4' src={photo4} alt="" />
        <h1 className='text-3xl font-semibold leading-100%'>{t("class.fourthGrade")}</h1>
        <h3 className='text-[18px] font-medium leading-100%'>{t("class.9-10yearsOld")}</h3>
        <p className='text-[14px] font-normal leading-100%'>{t("class.education")}</p>
        <button className='w-[147px] h-[32px] rounded-[5px] mx-auto bg-[#FFFFFF] text-[#6347EB]'>{t("class.btn")}</button>
      </div>

      <div className='bg-[#5855E7] text-[#FFFFFF] p-4 flex flex-col gap-3 text-center rounded-2xl'>
        <img  className='object-contain mx-auto mb-4' src={photo5} alt="" />
        <h1 className='text-3xl font-semibold leading-100%'>{t("class.zeroGrade")}</h1>
        <h3 className='text-[18px] font-medium leading-100%'>{t("class.4-5yearsOld")}</h3>
        <p className='text-[14px] font-normal leading-100%'>{t("class.logical")}</p>
        <button className='w-[147px] h-[32px] rounded-[5px] mx-auto bg-[#FFFFFF] text-[#6347EB]'>{t("class.btn")}</button>
      </div>
      </div>
    </div>
  )
}

export default Class