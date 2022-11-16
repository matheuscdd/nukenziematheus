import './styles.css';
import HeadHome from '../../components/HeadHome';
import InsertEntry from '../../components/InsertEntry';

function Home() {
    return (
        <div className='home-page'>
            <HeadHome/>
            <main className='container home-page'>
                <InsertEntry/>
                
            </main>
        </div>
    );
};

export default Home;