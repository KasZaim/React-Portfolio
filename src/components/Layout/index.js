import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div className="APP">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">&lt;/body&gt;</span>
                <br />
                
            </div>
        </div>
    )
}

export default Layout;
