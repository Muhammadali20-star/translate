import React from 'react'
import photo from '../../assets/stolovaya 1.png'
import photo2 from '../../assets/Informacionnye_tekhnologii_v_bibliotechnom_obsluzhivanii_detej 2.png'
import photo3 from '../../assets/mentalarifm_thumb 2.png'
import photo4 from '../../assets/73e0854453e4736b4e17cacd86d57b72 1.png'
import photo5 from '../../assets/scale_1200 2.png'
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation();
  return (
    <main className='bg-blue-600 py-3 px-4 mb-30'>
        <h2 className='text-white text-center text-[40px] leading-100% font-bold mb-12'>{t("main.advantages")}</h2>
        <div className='container mx-auto grid grid-cols-3 gap-6 mb-12'>
    <div className='text-center flex flex-col gap-4'>
        <div className='w-[225px] h-[225px] border-8 border-white shadow-lg rounded-full mx-auto'>
        <img className='w-[209px] h-[209px] rounded-full mx-auto' src={photo} alt="" />
        </div>
        <h1 className='text-[24px] leading-100% font-bold text-white'>{t("main.meal")}</h1>
        <p className='text-[18px] leading-100% font-normal text-white'>{t("main.school")}</p>
    </div>

    <div className='text-center flex flex-col gap-4'>
        <div className='w-[225px] h-[225px] border-8 border-white shadow-lg rounded-full mx-auto'>
        <img className='w-[209px] h-[209px] rounded-full mx-auto' src={photo2} alt="" />
        </div>
        <h1 className='text-[24px] leading-100% font-bold text-white'>{t("main.technologies")}</h1>
        <p className='text-[18px] leading-100% font-normal text-white'>{t("main.informational")}</p>
    </div>

    <div className='text-center flex flex-col gap-4'>
        <div className='w-[225px] h-[225px] border-8 border-white shadow-lg rounded-full mx-auto'>
        <img className='w-[209px] h-[209px] rounded-full mx-auto' src={photo3} alt="" />
        </div>
        <h1 className='text-[24px] leading-100% font-bold text-white'>{t("main.arithmetic")}</h1>
        <p className='text-[18px] leading-100% font-normal text-white'>{t("main.calculations")}</p>
    </div>

    <div className='text-center flex flex-col gap-4'>
        <div className='w-[225px] h-[225px] border-8 border-white shadow-lg rounded-full mx-auto'>
        <img className='w-[209px] h-[209px] rounded-full mx-auto' src={photo4} alt="" />
        </div>
        <h1 className='text-[24px] leading-100% font-bold text-white'>{t("main.English")}</h1>
        <p className='text-[18px] leading-100% font-normal text-white'>{t("main.available")}</p>
    </div>

    <div className='text-center flex flex-col gap-4'>
        <div className='w-[225px] h-[225px] border-8 border-white shadow-lg rounded-full mx-auto'>
        <img className='w-[209px] h-[209px] rounded-full mx-auto' src={photo5} alt="" />
        </div>
        <h1 className='text-[24px] leading-100% font-bold text-white'>{t("main.foreign")}</h1>
        <p className='text-[18px] leading-100% font-normal text-white'>{t("main.teachers")}</p>
    </div>
    </div>
    </main>
  )
}

export default Main