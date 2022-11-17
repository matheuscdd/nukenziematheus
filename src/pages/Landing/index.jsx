import './styles.css'; 
import LandInfo from '../../components/LandInfo';
import LandImg from '../../components/LandImg';

function Landing({action}) {
    return (
        <div className='land-page'>
            <main className='container land-main'>
                <LandInfo fun={() => action()}/>
                <LandImg/>
            </main>
        </div>
    );
};

export default Landing;