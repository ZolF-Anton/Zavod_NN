import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import {
    contactsInput,
    modalWindow,
    contacts__triq,
    contacts__form,
    input__wrap,
    contacts__textarea,
    contacts__error,
    input__red,
    btnPrice,
    contacts__policy,
    priceDescr,
    notify__message,
    notify__message__green,
    notify__message__red,
    notify__wrap,
    hidden,
} from './priceform.module.scss';
import axios from 'axios';
import cn from 'classnames';

const PriceForm = ({ active, setActive }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameError, setNameError] = useState('Заполните поле');
    const [phoneError, setPhoneError] = useState('Заполните поле');
    const [emailError, setEmailError] = useState('Заполните поле');
    const [checkedFlag, setCheckedFlag] = useState(true);
    const [notify, setNotify] = useState(true);
    const [hide, setHide] = useState(true);
    const [animation, setAnimation] = useState(0);
    const [msgText, setMsgText] = useState('############');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || phoneError || emailError || !checkedFlag) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError, emailError, checkedFlag]);

    const checkedHandler = (e) => {
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

    const handleSend = async (e) => {
        setText(e.target.text.value);
        e.preventDefault();

        let data = {
            to: 'zolfkn@yandex.ru',
            subject: 'Запарос прайса (XVII)',
            text: '${name} (тел: ${phone}, e-mail: ${email}), ${text}',
        };
        const a = JSON.stringify(data);
        const apiLink = 'https://api.ostkost.ru/api/zavodkd/mail';

        try {
            const response = await fetch(apiLink, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'X-Requested-With',
                    'User-Agent': 'PostmanRuntime/7.29.0',
                },
                body: a,
            });

            if (!response.ok) {
                throw new Error('Ответ сети был не ok.');
            }
            const answer = await response.json();
        } catch (error) {}
    };

    const handleSendXhr = async (e) => {
        e.preventDefault();
        // 1. Создаём новый XMLHttpRequest-объект
        let xhr = new XMLHttpRequest();

        // 2. Настраиваем его: GET-запрос по URL https://api.ostkost.ru/api/zavodkd/mail
        xhr.open('POST', 'https://api.ostkost.ru/api/zavodkd/mail');

        // 3. Отсылаем запрос
        xhr.send();

        // 4. Этот код сработает после того, как мы получим ответ сервера
        xhr.onload = function () {
            if (xhr.status != 200) {
                // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
            } else {
                // если всё прошло гладко, выводим результат
                console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
            }
        };

        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }
        };

        xhr.onerror = function () {
            console.log('Запрос не удался');
        };
    };

    const handleSendAxios = async (e) => {
        e.preventDefault();
        setText(e.target.text.value);

        const url = 'https://api.ostkost.ru/api/zavodkd/mail';
        const data = {
            to: ':DDobrota@mail.ru',
            subject: `Запрос прайса от ${name}`,
            text: `(тел: ${phone}, e-mail: ${email}), 
            ${text}`,
        };
        const response = await axios.post(url, data);

        if (response.status === 200) {
            setMsgText('Запрос Отправлен');
            setNotify(true);
            toggleHide(1);
        } else {
            setMsgText('Ошибка');
            setNotify(false);
            toggleHide(2);
        }
        // axios
        //     .post(url, data)
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error));
    };
    const toggleHide = (anim) => {
        setHide(false);
        setAnimation(anim);
        setTimeout(() => {
            setHide(true);
            setAnimation(0);
        }, 1100);
    };

    return (
        <section>
            <div className={notify__wrap}>
                <div
                    animation={animation}
                    className={cn(notify__message, {
                        [hidden]: hide,
                        [notify__message__green]: notify,
                        [notify__message__red]: notify === false,
                    })}
                >
                    {msgText}
                </div>
            </div>
            <div className={modalWindow}>
                <p className={priceDescr}>
                    Для получения детальной информации воспользуйтесь формой обратной связи
                </p>
                <form
                    action='#'
                    className={contacts__form}
                    id='input__name'
                    onSubmit={(event) => handleSendAxios(event)}
                >
                    <div className={input__wrap}>
                        <div className={contactsInput}>
                            <input
                                className={nameError && input__red}
                                value={name}
                                onChange={(e) => nameHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                name='name'
                                type='text'
                            />
                            {nameDirty && nameError && (
                                <div className={contacts__error}>{nameError}</div>
                            )}
                            <label htmlFor='name'>Имя Фамилия</label>
                        </div>
                        <div className={contactsInput}>
                            <input
                                className={phoneError && input__red}
                                value={phone}
                                onChange={(e) => phoneHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                onFocus={(e) => focusPhoneHandler(e)}
                                name='phone'
                                type='tel'
                                maxLength='12'
                                placeholder='+7(9xx)xxx-xx-xx'
                                pattern='\+7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}'
                            />
                            {phoneDirty && phoneError && (
                                <div className={contacts__error}>{phoneError}</div>
                            )}
                            <label htmlFor='name'>Телефон</label>
                        </div>
                        <div className={contactsInput} id='input__email'>
                            <input
                                className={emailError && input__red}
                                value={email}
                                onChange={(e) => emailHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                name='email'
                                type='text'
                                placeholder='Email'
                            />
                            {emailDirty && emailError && (
                                <div className={contacts__error}>{emailError}</div>
                            )}
                            {/* <label htmlFor="email">Ваша почта</label> */}
                        </div>
                    </div>
                    <div className={contacts__textarea}>
                        <textarea name='text' id='text' placeholder='Ваш вопрос'></textarea>
                        {/* <label htmlFor="text">Ваше сообщение</label> */}
                    </div>
                    <div className={contacts__triq}>
                        <button disabled={!formValid} className={btnPrice} type='submit'>
                            ПОЛУЧИТЬ ПРАЙС
                        </button>

                        <div className={contacts__policy}>
                            <input
                                type='checkbox'
                                checked={checkedFlag}
                                onChange={(e) => checkedHandler(e)}
                            />
                            <span>
                                Я согласен(а) c{' '}
                                <Link to='/privacy'>политикой конфиденциальности</Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PriceForm;
