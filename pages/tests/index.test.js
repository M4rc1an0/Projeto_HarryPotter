import {render, screen, fireEvent,waitFor} from '@testing-library/react' 
import userEvent from '@testing-library/user-event' 
import '@testing-library/jest-dom'
import Navbar from "../../components/Navbar";
import Fundo from "../../components/Fundo"
import Cards from "../../components/Cards"


describe('teste de componente',()=>{
    test('testando botao home da Navbar é renderizado', ()=>{
        render(<Navbar/>)

        const button = screen.getByTestId('teste')

        expect(button).toBeInTheDocument
    })
})

  describe('teste do componente Fundo',()=>{
    test('testando botao gryffindor é rendezado', ()=>{
        render(<Fundo/>)

        const button = screen.getByTestId('btnGryffindor')

        expect(button).toBeInTheDocument
    })
})

describe('teste do componente Fundo',()=>{
    test('testando botao slytherin é rendezado', ()=>{
        render(<Fundo/>)

        const button = screen.getByTestId('btnSlytherin')

        expect(button).toBeInTheDocument
    })
})

describe('teste do componente Fundo',()=>{
    test('testando botao Hufflepuff é rendezado', ()=>{
        render(<Fundo/>)

        const button = screen.getByTestId('btnHufflepuff')

        expect(button).toBeInTheDocument
    })
})

describe('teste do componente Fundo',()=>{
    test('testando botao Ravenclaw é rendezado', ()=>{
        render(<Fundo/>)

        const button = screen.getByTestId('btnRavenclaw')

        expect(button).toBeInTheDocument
    })
})

describe('teste do componente Fundo',()=>{
    test('testando se o botão de todos os persongens é renderizado', ()=>{
        render(<Fundo/>)

        const button = screen.getByTestId('btnAllChars')

        expect(button).toBeInTheDocument
    })
})
 





