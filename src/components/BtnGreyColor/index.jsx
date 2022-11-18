import './styles.css';
import { useState } from 'react';

function BtnGreyColor({content, action, fun, orderBtn, on, className, isLand}) {
    function categoryFun() {
        fun(orderBtn);
        on();
    };
    return (
        <div>
            <button  className={'btn-default ' + className} onClick={() => {
                action(content);
                if (isLand) {
                    console.log('');
                } else {
                    categoryFun();
                };
                }}>
                {content}
            </button>
        </div>
    );
};

export default BtnGreyColor;