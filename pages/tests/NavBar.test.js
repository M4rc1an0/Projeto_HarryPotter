import {render, screen} from '@testing-library/react' 
import Navbar from "../../components/Navbar";

describe('componente responsavel por fazer o header na pagina com apenas um botão que retorna a pagina inicial',() =>{
    test('deve existir na pagina', ()=>{
        render(<Navbar/>)

        const teste = screen.getbytext('0')

        expect(teste).toBeInDocument()
    })
})