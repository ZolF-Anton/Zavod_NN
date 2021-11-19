import React, { useEffect, useState } from 'react';
import {
    contactsInput,
    modalWindow,
    modalArea,
    activate,
    contacts__triq,
    contacts__form,
    input__wrap,
    contacts__textarea,
    contacts__error,
    input__red,
} from './priceform.module.scss';

const PriceForm = ({ active, setActive }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [email, setEmail] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameError, setNameError] = useState('Заполните поле');
    const [phoneError, setPhoneError] = useState('Заполните поле');
    const [emailError, setEmailError] = useState('Заполните поле');
    const [checkedFlag, setCheckedFlag] = useState(true);

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || phoneError || emailError || !checkedFlag) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError, emailError, checkedFlag]);

    const checkedHandler = () => {
        setCheckedFlag((prev) => !prev);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);

        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email');
        } else {
            setEmailError('');
        }
    };

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2) {
            setNameError('Короткое имя');
            if (!e.target.value) {
                setNameError('Ошибка');
            }
        } else {
            setNameError('');
        }
    };
    const phoneHandler = (e) => {
        setPhone(e.target.value);

        if ((e.target.value.length >= 2) & e.target.value.startsWith('8')) {
            setPhone(`+7${e.target.value.slice(1)}`);
        }
        if (e.target.value.length !== 12 || !e.target.value.startsWith('+7')) {
            setPhoneError('Не верный номер');
        } else {
            setPhoneError('');
        }
    };

    const focusPhoneHandler = (e) => {
        if (!e.target.value || e.target.value === '8') {
            setPhone('+7');
        } else if ((e.target.value.length === 11) & e.target.value.startsWith('8')) {
            console.log(typeof e.target.value);
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                focusPhoneHandler(e);
                break;
            case 'email':
                setEmailDirty(true);
                break;

            default:
                break;
        }
    };

    return (
        <modal className={active ? activate : modalArea} onClick={() => setActive(false)}>
            <div className={modalWindow} onClick={(e) => e.stopPropagation()}>
                <p>Для получения детальной информации воспользуйтесь формой обратной связи</p>
                <form action="#" className={contacts__form} id="input__name">
                    <div className={input__wrap}>
                        <div className={contactsInput}>
                            <input
                                className={nameError && input__red}
                                value={name}
                                onChange={(e) => nameHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                name="name"
                                type="text"
                            />
                            {nameDirty && nameError && (
                                <div className={contacts__error}>{nameError}</div>
                            )}
                            <label htmlFor="name">Имя Фамилия</label>
                        </div>
                        <div className={contactsInput}>
                            <input
                                className={phoneError && input__red}
                                value={phone}
                                onChange={(e) => phoneHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                onFocus={(e) => focusPhoneHandler(e)}
                                name="phone"
                                type="tel"
                                maxLength="12"
                                placeholder="+7 (9xx) xxx-xx-xx"
                                pattern="7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                            />
                            {phoneDirty && phoneError && (
                                <div className={contacts__error}>{phoneError}</div>
                            )}
                            <label htmlFor="name">Телефон</label>
                        </div>
                        <div className={contactsInput} id="input__email">
                            <input
                                className={emailError && input__red}
                                value={email}
                                onChange={(e) => emailHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                            {emailDirty && emailError && (
                                <div className={contacts__error}>{emailError}</div>
                            )}
                            {/* <label htmlFor="email">Ваша почта</label> */}
                        </div>
                    </div>
                    <div className={contacts__textarea}>
                        <textarea name="text" id="text" placeholder="Ваш вопрос"></textarea>
                        {/* <label htmlFor="text">Ваше сообщение</label> */}
                    </div>
                    <div className={contacts__triq}>
                        <button disabled={!formValid} type="submit">
                            ПОЛУЧИТЬ ПРАЙС
                        </button>
                        <div className="contacts__policy">
                            <input
                                type="checkbox"
                                checked={checkedFlag}
                                onChange={() => checkedHandler()}
                            />
                            <span>
                                Я согласен(а) c{' '}
                                <a href="/policy.html">политикой конфиденциальности</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </modal>
    );
};

export default PriceForm;
