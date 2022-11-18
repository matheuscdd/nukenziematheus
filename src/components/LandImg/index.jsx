import './styles.css';
import illustrationLanding from '../../assets/images/illustrationLanding.svg';

function LandImg() {
    return (
        <img src={illustrationLanding} alt='imagem mostrando as funcionalidades do serviço de gerenciamento de finanças' className='land-img' />
    );
};

export default LandImg;