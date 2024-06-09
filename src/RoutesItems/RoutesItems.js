
import { Routes, Route } from 'react-router-dom'
import About from '../component/About/About'
import Home from '../component/Home/Home'
import Contact from '../component/Contact/Contact'
export default function RoutesItems() {
    return (
        <> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}
