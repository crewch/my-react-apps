import rudeus from '../../imgs/rudeus.png';
import kira from '../../imgs/kira.png'

function Home() {
    return (
        <div style={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
            <img alt="rudeus" src={rudeus} style={{ margin: '7px', maxHeight: '800px'}} />
            <img alt="kira" src={kira} style={{ margin: '7px', maxHeight: '800px'}} />
        </div>
    );
}

export default Home;
