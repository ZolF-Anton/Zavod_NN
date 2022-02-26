import React from 'react';
import { Link } from 'gatsby';
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
    footerPitem,
    footerLine,
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
                        layout='constrained'
                    />
                    <StaticImage
                        src='../../images/logo-s-t.svg'
                        alt='logo first'
                        width={65}
                        layout='constrained'
                    />
                </div>
                <div className={footerNav}>
                    <div className={footerTitle}>Разделы сайта</div>
                    <div>
                        <Link className={footerItem} exact to={'/'}>
                            Главная
                        </Link>
                    </div>

                    <div>
                        <Link className={footerItem} to={'/catalog'}>
                            Каталог
                        </Link>
                    </div>
                    <div>
                        <Link className={footerItem} to={'/contacts'}>
                            Контакты
                        </Link>
                    </div>
                    <div>
                        <Link className={footerItem} to={'/about'}>
                            О компании
                        </Link>
                    </div>
                    <div>
                        <Link className={footerItem} to={'/price'}>
                            Прайс
                        </Link>
                    </div>
                </div>
                <div className={footerInfo}>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Телефон:</div>
                        <div className={footerPhone}>
                            <a href='tel:+78633033044'>+7(863)303-30-44</a>
                        </div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>График работы:</div>
                        <div className={footerSchedule}>Понедельник-Пятница</div>
                        <div className={footerSchedule}>08:00 - 17:00</div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Email:</div>
                        <div className={footerEmail}>
                            <a href='mailto:DDobrota@mail.ru'>DDobrota@mail.ru</a>
                        </div>
                    </div>
                    <div className={footerBlock}>
                        <div className={footerTitle}>Адрес:</div>
                        <div className={footerAdress}>347740, г. Зерноград, ул. Ленина, 16Е</div>
                    </div>
                </div>
            </div>
            <div className={footerLine}></div>
            <div className={footerPolitics}>
                {/* сделать ссылки */}

                <div className={footerPitem}>Обработка персональных данных</div>
                <div className={footerPitem}>Политика конфиденциальности</div>
                <div className={footerPitem}>
                    Завод глушителей "КД" и "ТДГ" | zavod-kd.ru ©{getCurrentYear()}
                </div>
            </div>

            <div className={footerDevs}>
                Дизайн&Разработка: <a href='https://github.com/OstKost'>OstKost</a>&
                <a href='https://anton-zolf.su/'>Anton-Zolf</a>
            </div>
        </footer>
    );
}

export default Footer;
