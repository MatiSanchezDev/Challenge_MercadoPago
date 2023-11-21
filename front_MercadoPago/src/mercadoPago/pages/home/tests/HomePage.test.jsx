import {cleanup, render} from "@testing-library/react"
import {HomePage} from '../HomePage'


describe('<HomePage/>', ()=> {
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)

    it('Render Component', ()=> {
        const component = render(<HomePage />)
        expect(component).toBeTruthy()
    })
})