import './styles.css';
import InputDefault from '../InputDefault';
import SelectDefault from '../SelectDefault';

function InsertEntry() {
    return (
        <form className='new-entry'>
            <InputDefault placeholder='Digite aqui sua descrição' id='description' type='text' label='Descrição' legend='Ex: Compra de roupas' widthInput={300}/>
            <br /><br /><br /><br /><br />
            <InputDefault placeholder={1} id='valueEntry' type='number' label='Valor' example='R$' widthInput={80}/>
            <br /><br /><br /><br /><br />
            <SelectDefault label='Tipo de valor' explanation='Selecione' options={['Entrada', 'Despesa']}/>
        </form>
    );
};

export default InsertEntry;
