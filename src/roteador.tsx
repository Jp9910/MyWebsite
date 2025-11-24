import {BrowserRouter, Routes, Route, Navigate} from 'react-router'
import NotFound from './pages/NotFound'
import Rodape from './components/Rodape'
import ContainerCaixa from './components/ContainerCaixa'
import NavBar from './components/Navbar'
import AboutMeEnglish from './pages/AboutMe'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'

// https://github.com/alura-cursos/aluroni-router/blob/main/src/routes.tsx
function Roteador() {
    // const url = window.location.href.split("/")
    // console.log("url:",url)
    return (
        <BrowserRouter>
            <ContainerCaixa>
                <NavBar />
                <Routes>
                        <Route path="/website/" element={<AboutMeEnglish />}/>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/website/resume" element={<Resume />}/>
                        <Route path="/website/portfolio" element={<Portfolio />}/>
                        <Route path="/website/blog" element={<Blog />}/>
                        <Route path="/*" element={<Navigate to="/website" replace />}/>
                        {/* <Route path="/MyWebsite" element={<Navigate to="/" replace />}/> */}
                </Routes>
                <Rodape />
            </ContainerCaixa>
        </BrowserRouter>
    )
}

export default Roteador