import './Header.css'

function Header() {

    return(
        <div>
            <header className="App-header">
                <div className='customLogo'></div>
                <div className='heroBlock'>
                    <div className='title'>
                        <h1 className="App-title">Gallery of My Life</h1>
                        <p>For this project I created a gallery page to share pictures of things that are important to me.</p>
                        <p>Visitors can add to the gallery by inserting an image address and discription in the fields at the top of the page. Within the gallery, visitors can click on an image to see the description and use a button to like or remove an image. The total likes for each image is displayed within each image card. </p>
                    </div>
                    <div className='languages'>
                    <div>
                        <h3 className='languagesHeading'>Languages Used</h3>
                    <div className='language'>
                        <ul>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>JSX</li>
                            <li>Bootstrap</li>
                            <li>PostgreSQL</li>
                            <li>Express.js</li>
                            <li>Axios</li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;