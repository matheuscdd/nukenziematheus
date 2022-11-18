import './styles.css';
import BtnGreyColor from '../BtnGreyColor';

function CategoryChoice({action, fun, eb, sb, tb, currentFilter}) {
    const Todos = currentFilter === 'Todos'? 'btn-default-clicked' : '';
    const Entradas = currentFilter === 'Entradas'? 'btn-default-clicked' : '';
    const Despesas = currentFilter === 'Despesas'? 'btn-default-clicked' : '';
    return (
        <div className='category-choice'>
            <h3>Resumo financeiro</h3>
            <div className='category-choice-btns'>
            <BtnGreyColor on={tb} content='Todos' key={0} action={action} fun={fun} orderBtn={0} className={Todos}/>
            <BtnGreyColor on={eb} content='Entradas' key={1} action={action} fun={fun} orderBtn={1} className={Entradas}/>
            <BtnGreyColor on={sb} content='Despesas' key={2} action={action} fun={fun} orderBtn={2} className={Despesas}/>
            </div>
        </div>
    );
};

export default CategoryChoice;