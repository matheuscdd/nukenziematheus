import './styles.css'; 
import illustrationLanding from '../../assets/images/illustrationLanding.svg';
import logo from '../../assets/images/logoLight.svg';

function Landing() {
    return (
        <main>
            <section>
                <img src={logo} alt="nu kenzie" />
                <h1>Centralize o controle das suas finanças</h1>
                
            </section>
            <img src={illustrationLanding} alt="imagem mostrando as funcionalidades do serviço de gerenciamento de finanças" />
        </main>
    );
};

export default Landing