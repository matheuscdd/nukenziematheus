import './styles.css';

function SelectDefault({id, label, explanation, options}) {
    return (
        <div className='select-default'>
            <label htmlFor={id}>{label}</label>
            <select>
                <option value="" style={{display: 'none'}}>{explanation}</option>
                    {
                    options.map((el, index) => 
                        <>
                            <option value={el.toLowerCase()} key={index}>{el}</option>
                        </>
                    )
                    }
            </select>
        </div>
    );
};

export default SelectDefault;