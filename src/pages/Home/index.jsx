import './styles.css';
import HeadHome from '../../components/HeadHome';
import InsertEntry from '../../components/InsertEntry';
import TotalValue from '../../components/TotalValue';
import AncientEntries from '../../components/AncientEntries';
import CategoryChoice from '../../components/CategoryChoice';
import { useState } from 'react';


function Home() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [choice, setChoice] = useState('');
    const [entries, setEntries] = useState([]);
    const [justPrices, setJustPrices] = useState([]);
    
    

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
            let num = entry.price * -1
            entry.price = num
        }
        setJustPrices([...justPrices, entry.price]);
        
        setEntries([...entries, entry]);
        
    };


    
    
    function handleSubmit(event) {
        event.preventDefault();
        addValue();
        console.log(entries)
    };

    
    return (
        <div className='home-page'>
            <HeadHome/>
            <main className='container main-content'>
                <section className='home-new-and-status'>
                    <InsertEntry setTitle={setTitle} setPrice={setPrice} setChoice={setChoice} handleSubmit={handleSubmit}/>
                    
                    <TotalValue priceAll={justPrices.reduce((acc, cur) => acc + cur, 0)}/>
                    
                    
                </section>
                <section className='home-categories-and-entries'>
                    <CategoryChoice/>
                    <AncientEntries entriesList={entries} action={console}/>
                </section>
            </main>
        </div>
    );
};

export default Home;