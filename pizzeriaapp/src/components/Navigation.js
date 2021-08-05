import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
    const styleObj = {      
        color: "white",
        backgroundColor:"black",
        paddingTop: "10px",
    }
    return (
        <>
            {/* <Link to="/">Home</Link>
            <Link to="/order">Order Pizza</Link>
            <Link to="/build">Build</Link>
            <nav className="container mx-auto flex items-center">
   
                <p>Pizzeria</p>
                    <Link to="/">
                        <img src="/PizzeriaLogo.png" alt="Logo" width="40px" height="40px"></img>
                    </Link>
                <ul id="menu">
                    <li><Link to="/order">Order Pizza</Link></li>
                    <li><Link to="/build">Build</Link></li>
                    <li>
                    <img src="/CartLogo.png" alt="Logo" width="80px" height="30px"></img>
                    </li>
                </ul>

            </nav> */}
            <nav className="navbar navbar-expand-sm" style={styleObj}>
                <h3 className="navbar-brand">Pizzeria</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><img src="/PizzeriaLogo.png" alt="Logo" width="60px" height="40px"></img><span className="sr-only"></span></a>
                        </li><br/>
                    </ul>                        
                            <a className="nav-link" href="/order">Order Pizza</a><br/>
                            <a className="nav-link" href="/build">Build Your Pizza</a>
                        
                            <a className="nav-link" href="/"><img src="/BlackLogo.png" alt="Logo" width="590px" height="0px"></img><span className="sr-only"></span></a>

                            <div className="mr-auto">
                            <a className="nav-link" href="/"><img className="image" src="/CartLogo.png" alt="Logo" width="140px" height="40px"></img><span className="sr-only"></span></a>
                            {/* <button className="btn">Shopping Cart</button> */}
                            </div>
                </div>
            </nav>
        </>
    )
}