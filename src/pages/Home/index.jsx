import './styles.css';
import HeadHome from '../../components/HeadHome';
import InsertEntry from '../../components/InsertEntry';
import TotalValue from '../../components/TotalValue';
import AncientEntries from '../../components/AncientEntries';
import CategoryChoice from '../../components/CategoryChoice';
import { useState } from 'react';


function Home({action}) {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [choice, setChoice] = useState('');
    const [entries, setEntries] = useState([]);
    const [justPrices, setJustPrices] = useState([]);
    const [currentList, setCurrentList] = useState([]);

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
        
    };
  
    function handleSubmit(event) {

        event.preventDefault();
        addValue();
        console.log(entries);
    };

    function deleteThis(identifier) {
        const copysEntries = [...entries];
        const position = copysEntries.findIndex(({uuid}) => uuid === identifier);
        copysEntries.splice(position, 1);
        console.log(copysEntries);
        setEntries([...copysEntries]);
        const listOnlyNum = copysEntries.map(({price}) => price);
        setJustPrices([...listOnlyNum]);
        setCurrentList([...copysEntries])
    };
    
    function renderJust(name) {
      
        if (name === 'Todos') {
            setCurrentList([...entries]);
        } else if (name === 'Entradas') {
            let listIncomes = entries.filter(({choice}) => choice === 'income');
            setCurrentList([...listIncomes]);
        } else if (name === 'Despesas') {
            let listExpenses = entries.filter(({choice}) => choice === 'expense');
            setCurrentList([...listExpenses]);
        };
    };

    return (
        <div className='home-page'>
            <HeadHome fun={() => action()}/>
            <main className='container main-content'>
                <section className='home-new-and-status'>
                    <InsertEntry setTitle={setTitle} setPrice={setPrice} setChoice={setChoice} handleSubmit={handleSubmit}/>
                    
                    <TotalValue priceAll={justPrices.reduce((acc, cur) => acc + cur, 0)}/>
                    
                    
                </section>
                <section className='home-categories-and-entries'>
                    <CategoryChoice action={renderJust}/>
                    <AncientEntries entriesList={currentList} action={deleteThis}/>
                </section>
            </main>
        </div>
    );
};

export default Home;