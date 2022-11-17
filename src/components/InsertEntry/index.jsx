import './styles.css';
import InputDefault from '../InputDefault';
import SelectDefault from '../SelectDefault';
import BtnMainColor from '../BtnMainColor';

function InsertEntry() {
    return (
        <form className='new-entry'>
            <InputDefault placeholder='Digite aqui sua descrição' id='description' type='text' label='Descrição' legend='Ex: Compra de roupas' widthInput={275}/>
            <div className='cont-entry-details'>
                <InputDefault placeholder={1} id='valueEntry' type='number' label='Valor' example='R$' widthInput={80}/>
                {/* <SelectDefault label='Tipo de valor' explanation='Selecione' options={[{name: 'Entrada', type: 'income'}, {name: 'Despesa', type: 'expense'}]}/> */}
            </div>
            <BtnMainColor content='Inserir valor'/>
        </form>
    );
};

export default InsertEntry;
