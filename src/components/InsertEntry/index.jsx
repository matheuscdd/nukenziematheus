import './styles.css';
import InputDefault from '../InputDefault';
import SelectDefault from '../SelectDefault';
import BtnMainColor from '../BtnMainColor';

function InsertEntry() {
    function handleSubmit(event) {
        event.preventDefault();
    };
    return (
        <form className='new-entry' onSubmit={handleSubmit}>
            <InputDefault placeholder='Digite aqui sua descrição' id='description' type='text' label='Descrição' legend='Ex: Compra de roupas' widthInput={275}/>
            <div className='cont-entry-details'>
                <InputDefault placeholder={1} id='valueEntry' type='number' label='Valor' example='R$' widthInput={80}/>
                <SelectDefault label='Tipo de valor' explanation='Selecione' options={[{id: 1, name: 'Entrada', type: 'income'}, {id: 2, name: 'Despesa', type: 'expense'}]} identifier='select'/>
            </div>
            <BtnMainColor content='Inserir valor'/>
        </form>
    );
};

export default InsertEntry;
