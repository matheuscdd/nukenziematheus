import './styles.css';
import BtnGreyColor from '../BtnGreyColor';
import logo from './../../assets/images/logoDark.svg';


function HeadHome() {
    return (
        <header>
                <div className='container home-head'>
                    <img src={logo} alt='nu kenzie' className='logo'/>
                    <BtnGreyColor content='Início'/>
                </div>
        </header>
    );
};

export default HeadHome;