import './styles.css';
import BtnDelete from '../BtnDelete';
import valueReal from '../../generalFunctions';

function Card({title, type, value, identifier, preloader}) {
    let definition = { color: '', kind: '' };

    if (type === 'income') {
        definition.color = '#03B898';
        definition.kind = 'Entrada';
    } else {
        definition.color = '#E9ECEF';
        definition.kind = 'Despesa';
    };
    
    return (
        <li className='card'>
            
            <div className='card-status' style={{ backgroundColor: definition.color }}></div>
            <div className="card-content">
                <div className="card-info">
                    <h4 className='card-title'>{title}</h4>
                    <div className='card-details'>
                        <span className='card-value'>{valueReal(value)}</span>
                        <BtnDelete id={identifier}/>
                    </div>
                </div>
                <span className='card-kind'>{definition.kind}</span>
            </div>

        </li>
    );
};

export default Card;