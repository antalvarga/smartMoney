// Navegando entre as telas - 16:05
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Aula: Integrando com o sistemas de rota dinâmica - 01:52
import Loading from './Pages/Loading';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 01:40
import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';




const Routes = createAppContainer( 
    createSwitchNavigator(
        {
            // Aula: Integrando com o sistemas de rota dinâmica - 01:52
            Loading
            
            // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 01:52 - Welcome
            , Welcome
            , Main
            , NewEntry
            , Report
        }
        , {
            // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 01:53 - InitialRouteName
            // initialRouteName: 'Main'
            // Aula: Integrando com o sistemas de rota dinâmica - 01:52
            // initialRouteName: 'Welcome'
            initialRouteName: 'Loading'
            // , backBehavior: 'order'
            , backBehavior: 'history'
        }
    )
);





export default Routes;
