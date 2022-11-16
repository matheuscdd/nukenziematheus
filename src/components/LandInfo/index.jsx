import './styles.css';
import BtnMainColor from '../BtnMainColor';
import logo from './../../assets/images/logoLight.svg';

function LandInfo() {
    return (
        <section className='land-info'>
            <img src={logo} alt="nu kenzie" className='logo'/>
            <h1>Centralize o controle das suas finanças</h1>
            <legend>de forma rápida e segura</legend>
            <BtnMainColor content="Iniciar"/>
        </section>
    );
};

export default LandInfo;