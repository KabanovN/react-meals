import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='page-footer green darken-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <Link className='grey-text text-lighten-4 right' to='/'>
                        Home
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
