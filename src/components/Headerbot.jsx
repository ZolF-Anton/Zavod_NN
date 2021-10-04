import React from 'react';
import * as style from './headerbot.module.scss';
const Headerbot = () => {
    return (
        <>
            <div className={style.skillsWrap}>
                <div className={style.skillItem}>
                    <div className={style.skillTitle}>Профессионализм</div>
                    <div className={style.skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности
                    </div>
                </div>
                <div className={style.skillItem}>
                    <div className={style.skillTitle}>Прозрачность</div>
                    <div className={style.skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие
                    </div>
                </div>
                <div className={style.skillItem}>
                    <div className={style.skillTitle}>Инновации</div>
                    <div className={style.skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности
                    </div>
                </div>
                <div className={style.skillItem}>
                    <div className={style.skillTitle}>Стремление быть лучшими</div>
                    <div className={style.skillDescr}>
                        Разнообразный и богатый опыт дальнейшее развитие различных
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headerbot;
