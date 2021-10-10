import React from 'react';
import {
    footerMain,
    footerItem,
    footerTitle,
    footerLogo,
    footerNav,
    footerInfo,
    footerBlock,
    footerPhone,
    footerSchedule,
    footerEmail,
    footerAdress,
    footerPolitics,
    footerDevs,
} from './footer.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer>
            <div className={footerMain}>
                <div className={footerLogo}>
                    <StaticImage
                        src='../../images/logo-s.svg'
                        alt='logo first'
                        width={160}
                        layout='fixed'
                    />
                    <StaticImage
                        src='../../images/logo-s-t.svg'
                        alt='logo first'
                        width={110}
                        layout='fixed'
                    />
                </div>
                <div className={footerNav}>
                    <div className={footerTitle}>Разделы сайта</div>
                    <div className={footerItem}>О компании</div>
                    <div className={footerItem}>Услуги</div>
                    <div className={footerItem}>Раскрытие информации</div>
                    <div className={footerItem}>Абонентам</div>
                    <div className={footerItem}>Наши объекты</div>
                    <div className={footerItem}>Новости</div>
                    <div className={footerItem}>Контакты</div>
                </div>
                <div className={footerInfo}>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Телефон:</div>
                        <div className={footerPhone}>+7 (812) 603-73-77</div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>График работы:</div>
                        <div className={footerSchedule}>Понедельник-Пятница</div>
                        <div className={footerSchedule}>08:00 - 19:00</div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Email:</div>
                        <div className={footerEmail}>office@promimpuls.ru</div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Адрес:</div>
                        <div className={footerAdress}>
                            196084, г. Санкт-Петербург, ул. Рощинская, д. 5, лит. И
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerPolitics}>
                {/* сделать ссылки */}
                <div className='footer-pitem'>Обработка персональных данных</div>
                <div className='footer-pitem'>Политика конфиденциальности</div>
                <div className='footer-pitem'>
                    Завод глушителей "КД" и "ТДГ" | zavod-kd.ru ©{getCurrentYear()}
                </div>
            </div>
            <div className={footerDevs}>Дизайн&Разработка:</div>
        </footer>
    );
}

export default Footer;
