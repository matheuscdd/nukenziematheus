import './styles.css';
import BtnGreyColor from '../BtnGreyColor';
import logo from './../../assets/images/logoDark.svg';


function HeadHome({fun}) {
    return (
        <header>
                <div className='container home-head'>
                    <img src={logo} alt='nu kenzie' className='logo'/>
                    <BtnGreyColor content='Início' action={() => fun()} isLand={true}/>
                </div>
        </header>
    );
};

export default HeadHome;