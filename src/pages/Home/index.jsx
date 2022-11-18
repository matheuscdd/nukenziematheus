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
    const [currentList, setCurrentList] = useState([]);
    const [currentName, setCurrentName] = useState('Todos');
    const [trying, setTrying] = useState([]);

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
        
        upgradeHTML();
    };

    function deleteThis(identifier) {
        const copysEntries = [...entries];
        const position = copysEntries.findIndex(({uuid}) => uuid === identifier);
        copysEntries.splice(position, 1);
        console.log(copysEntries);
        setEntries([...copysEntries]);
        const listOnlyNum = copysEntries.map(({price}) => price);
        setJustPrices([...listOnlyNum]);
        setCurrentList([...copysEntries]);
    };
    
    function upgradeHTML() {
        setCurrentList([...entries]);
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

                    <AncientEntries entriesList={
                        currentName === 'Despesas'?
                        entries.filter(({choice}) => choice === 'expense') :
                        currentName === 'Entradas'?
                        entries.filter(({choice}) => choice === 'income') :
                        entries
                    } action={deleteThis}/> 
                    
                </section>
            </main>
        </div>
    );
};

export default Home;