import './styles.css';
import BtnGreyColor from '../BtnGreyColor';

function CategoryChoice() {
    const btnsNames = ['Todos', 'Entradas', 'Despesas'];
    return (
        <div className='category-choice'>
            <h3>Resumo financeiro</h3>
            <div className='category-choice-btns'>
                {
                    btnsNames.map((name, index) => 
                    <BtnGreyColor content={name} key={index}/>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryChoice;