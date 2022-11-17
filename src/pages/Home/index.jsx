import './styles.css';
import HeadHome from '../../components/HeadHome';
import InsertEntry from '../../components/InsertEntry';
import TotalValue from '../../components/TotalValue';
import AncientEntries from '../../components/AncientEntries';
import CategoryChoice from '../../components/CategoryChoice';

function Home() {
    return (
        <div className='home-page'>
            <HeadHome/>
            <main className='container main-content'>
                <section className='home-new-and-status'>
                    <InsertEntry/>
                    <TotalValue priceAll={2000}/>
                </section>
                <section className='home-categories-and-entries'>
                    <CategoryChoice/>
                    <AncientEntries/>
                </section>
            </main>
        </div>
    );
};

export default Home;