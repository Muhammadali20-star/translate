import React from 'react'
import photo from '../../assets/logo (12).svg'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
      const changeLanguage = (lan) => {
        i18n.changeLanguage(lan);
      };
  return (
    <header className='bg-blue-600'>
        <nav className='container mx-auto flex justify-between items-center'>
            <div>
             <img src={photo} alt="" />
            </div>
            <ul className='flex gap-6'>
                <li className='text-2xl font-medium leading-[100%] text-[#FFFFFF]'>{t("header.about")}</li>
                <li className='text-2xl font-medium leading-[100%] text-[#FFFFFF]'>{t("header.advantages")}</li>
                <li className='text-2xl font-medium leading-[100%] text-[#FFFFFF]'>{t("header.classes")}</li>
                <li className='text-2xl font-medium leading-[100%] text-[#FFFFFF]'>{t("header.contacts")}</li>
            </ul>
            <select className='bg-white' onChange={(e)=> changeLanguage(e.target.value)}>
                <option value="ru">ru</option>
                <option value="en">en</option>
                <option value="uz">uz</option>
            </select>
            <div className='bg-[#FFFFFF] rounded-[5px] text-center py-2 w-64 h-[45px]'>
            <button className='text-2xl font-medium leading-[100%]'>{t("header.button")}</button>
            </div>
        </nav>
    </header>
  )
}

export default Header