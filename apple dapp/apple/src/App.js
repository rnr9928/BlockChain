import useWeb3 from './hooks/useWeb3';
import AppleShop from './components/AppleShop';
import './App.css';

function App() {

  const [web3, account] = useWeb3();
  if(!account) return <h1>메타마스크를 연결해주세요</h1>

  return (
    <div className='App'>
        <h2>Apple App</h2>
        <AppleShop web3 = { web3} account={account}/>
    </div>
  );
}

export default App;
