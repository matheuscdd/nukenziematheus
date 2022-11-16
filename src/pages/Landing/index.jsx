import './styles.css'; 
import LandInfo from '../../components/LandInfo';
import LandImg from '../../components/LandImg';

function Landing() {
    return (
        <div className='land-page'>
            <main className='container land-main'>
                <LandInfo/>
                <LandImg/>
            </main>
        </div>
    );
};

export default Landing;