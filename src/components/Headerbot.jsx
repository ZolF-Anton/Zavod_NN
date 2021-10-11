import React from 'react';
import { skillsWrap, skillItem, skillTitle, skillDescr } from './headerbot.module.scss';
const Headerbot = () => {
    return (
        <>
            <div className={skillsWrap}>
                <div className={skillItem}>
                    <div className={skillTitle}>Профессионализм</div>
                    <div className={skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>Прозрачность</div>
                    <div className={skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>Инновации</div>
                    <div className={skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>Стремление быть лучшими</div>
                    <div className={skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headerbot;
