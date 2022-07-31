
import Promo from '../promo/Promo';
import PageDescr from '../pageDescr/PageDescr';
import BePart from '../bePart/BePart';
import Plan from '../plan/Plan';
import Diplom from '../diplom/Diplom';
import Register from '../register/Register';
import './App.scss';

const App = () => {
	return (
		<>
			<Promo />
			<PageDescr />
			<BePart />
			<Plan />
			<Diplom />
			<Register />
		</>
	)
}

export default App;
