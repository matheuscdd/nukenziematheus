import './styles.css';
import InputDefault from '../InputDefault';
import SelectDefault from '../SelectDefault';
import BtnMainColor from '../BtnMainColor';
import { useState } from 'react';

function InsertEntry({setPrice, setChoice, setTitle, handleSubmit}) {
    return (
        <form className='new-entry' onSubmit={(event) => handleSubmit(event)}>
            <InputDefault placeholder='Digite aqui sua descrição' id='description' type='text' label='Descrição' legend='Ex: Compra de roupas' widthInput={275} userData='title' action={setTitle}/>
            <div className='cont-entry-details'>
                <InputDefault placeholder={1} id='valueEntry' type='number' label='Valor' example='R$' widthInput={80}  action={setPrice}/>
                <SelectDefault label='Tipo de valor' explanation='Selecione' options={[{id: 1, name: 'Entrada', type: 'income'}, {id: 2, name: 'Despesa', type: 'expense'}]} identifier='select' action={setChoice}/>
            </div>
            <BtnMainColor content='Inserir valor' action={() => Number(0)}/>
        </form>
    );
};

export default InsertEntry;
