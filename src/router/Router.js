import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Employees, Home } from "../pages"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/employees' element={<Employees/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router