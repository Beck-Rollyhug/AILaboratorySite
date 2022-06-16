import React, {useState} from 'react';
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const [isActive, setIsActive] = useState(null);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className={styles.box}>
            <div className={styles.search}>
                <div className={styles.general}>
                    <div className={styles.icon} onClick={() => handleClick()}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 21.5H5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 24C22.3807 24 23.5 22.8807 23.5 21.5C23.5 20.1193 22.3807 19 21 19C19.6193 19 18.5 20.1193 18.5 21.5C18.5 22.8807 19.6193 24 21 24Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27 10.5H15.5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13 13C14.3807 13 15.5 11.8807 15.5 10.5C15.5 9.11929 14.3807 8 13 8C11.6193 8 10.5 9.11929 10.5 10.5C10.5 11.8807 11.6193 13 13 13Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <input type="text" className={styles.input} placeholder="Введите название проекта..."/>
                </div>
                <div className={styles.advanced} style={{display: isActive ? 'flex' : 'none',}}>
                    <div className={styles.adv_box}>
                        <div className={styles.icon}/>
                        <input className={styles.input + ' ' + styles.adv_input} placeholder="Фамилия куратора..."/>
                    </div>
                    <div className={styles.adv_box}>
                        <div className={styles.icon}/>
                        <input className={styles.input + ' ' + styles.adv_input} placeholder="Название технологии..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {SearchBar};