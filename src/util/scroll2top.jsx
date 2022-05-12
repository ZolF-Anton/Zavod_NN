import React, { useState, useEffect } from 'react';
import { TopWay } from './TopWay';

const Scroll2top = () => {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 770) {
                setHide(false);
            } else {
                setHide(true);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` });
    };
    return (
        <>
            {!hide && (
                <div
                    onClick={handleClick}
                    style={{
                        display: 'flex',
                        backgroundColor: '#e6f6fc',
                        borderRadius: '90%',
                        position: 'fixed',
                        bottom: '45px',
                        right: '15px',
                        width: '50px',
                        height: '50px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <TopWay />
                </div>
            )}
        </>
    );
};

export default Scroll2top;
