import './styles.css';

function SelectDefault({identifier, label, explanation, options, action}) {
    return (
        <div className='select-default'>
            <label htmlFor={identifier}>{label}</label>
            <select id={identifier} onChange={(event) => action(event.target.value)}>
                <option value="" className='displayNone' key='22'>{explanation}</option>
                    {
                    options.map((el, index) => 
                            <option value={el.type} key={el.id}>{el.name}</option>
                    )
                    }
            </select>
        </div>
    );
};

export default SelectDefault;