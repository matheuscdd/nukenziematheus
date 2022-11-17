import './styles.css';

function InputDefault({placeholder, example, id, label, type, legend, widthInput}) {
    return (
        <div className='input-default'>
            <label htmlFor={id}>
                <span className='explanation'>{label}</span>
                <div className='cont-input'>
                    <input type={type} id={id} placeholder={placeholder} style={{width: widthInput}}/>
                    {   example?
                        <span className='example'>{example}</span>
                        : <></>
                    }
                </div>
            </label>
            {   legend?
                <small>{legend}</small>
                : <></>
            }
        </div>
    );
};

export default InputDefault;