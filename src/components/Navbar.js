import memeImage from '../images/meme3.jpeg';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src={memeImage} alt="Meme logo"  className='logo'/>
                <h1 className="header-left">Meme Generator</h1>
                <h3 className="header-right">React Course - Project 3</h3>
            </nav>
        </div>
    );
}

export default Navbar;
