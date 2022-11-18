import './styles.css';
import HeadHome from '../../components/HeadHome';
import InsertEntry from '../../components/InsertEntry';
import TotalValue from '../../components/TotalValue';
import AncientEntries from '../../components/AncientEntries';
import CategoryChoice from '../../components/CategoryChoice';
import { useEffect, useState } from 'react';


function Home({action}) {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [choice, setChoice] = useState('');
    const [entries, setEntries] = useState([]);
    const [justPrices, setJustPrices] = useState([]);
    const [currentName, setCurrentName] = useState('Todos');
    const [currentFilter, setCurrentFilter] = useState('Todos');

    function addValue() {
        
        if (choice === '' || title === '' || price === '') {
            return;
        };
        let entry = {
            'choice': choice,
            'title': title,
            'price': Number(price),
            'uuid': Math.random()
        };
        if (choice === 'expense') {
            let num = entry.price * -1;
            entry.price = num;
        };
        setJustPrices([...justPrices, entry.price]);
        setEntries([...entries, entry]);
        renderJust('Todos');
    };
    function handleSubmit(event) {

        event.preventDefault();
        addValue();

    };

    function entradaB() {
        setCurrentFilter('Entradas');
    };

    function saidaB() {
        setCurrentFilter('Despesas');
    };

    function todosB() {
        setCurrentFilter('Todos');
    };
    

    function deleteThis(identifier) {
        const copysEntries = [...entries];//filter
        const listWithoutHim = copysEntries.filter(({uuid}) => uuid !== identifier);
        setEntries([...listWithoutHim]);
        const listOnlyNum = listWithoutHim.map(({price}) => price);
        setJustPrices([...listOnlyNum]);

    };
    
    function changeThisBtn(num) {
        console.log(num)
        // setCurrentBtn
    };

    function renderJust(name) {
        if (name === 'Todos') {
            setCurrentName('Todos');
        } else if (name === 'Entradas') {
            setCurrentName('Entradas');
        } else if (name === 'Despesas') {
            setCurrentName('Despesas');
        };
    };

    const filterItems = entries.filter((el) => {
        if (currentFilter === 'Entradas') {
            return el.choice === 'income';
        } else if (currentFilter === 'Despesas') {
            return el.choice === 'expense';
        } else {
            return el;
        };
    });

    
    return (
        <div className='home-page'>
            <HeadHome fun={() => action()}/>
            <main className='container main-content'>
                <section className='home-new-and-status'>
                    <InsertEntry setTitle={setTitle} setPrice={setPrice} setChoice={setChoice} handleSubmit={handleSubmit}/>
                    
                    <TotalValue priceAll={justPrices.reduce((acc, cur) => acc + cur, 0)}/>
                    
                </section>
                <section className='home-categories-and-entries'>
                    <CategoryChoice action={renderJust} fun={changeThisBtn} eb={entradaB} sb={saidaB} tb={todosB} currentFilter={currentFilter}/>

                    
                    <AncientEntries entriesList={filterItems} action={deleteThis}/> 
                    
                </section>
            </main>
        </div>
    );
};

export default Home;