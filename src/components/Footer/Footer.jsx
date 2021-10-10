import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='footer-main'>
                <div className='footer-logo'></div>
                <div className='footer-nav'>
                    <div className='footer-title'>Разделы сайта</div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                    <div className='footer-item'></div>
                </div>
                <div className='footer-info'>
                    <div className='footer-block'>
                        <div className='footer-title'>Телефон:</div>
                        <div className='footer-phone'></div>
                    </div>
                    <div className='footer-block'>
                        <div className='footer-title'>График работы:</div>
                        <div className='footer-schedule'></div>
                    </div>
                    <div className='footer-block'>
                        <div className='footer-title'>Email:</div>
                        <div className='footer-email'></div>
                    </div>
                    <div className='footer-block'>
                        <div className='footer-title'>Адрес:</div>
                        <div className='footer-adress'></div>
                    </div>
                </div>
            </div>
            <div className='footer-politics'></div>
            <div className='footer-devs'></div>
        </footer>
    );
}

export default Footer;
