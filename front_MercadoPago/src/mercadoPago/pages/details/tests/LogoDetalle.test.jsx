import { cleanup, render } from '@testing-library/react'
import { LogoDetalle } from '../components/LogoDetalle'

describe('<LogoDetalle>', () => {
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)
    
    const detalle = {
        type:"cash" || "qr" || "card"
    }

    it('Render component', () => {
        const component = render(<LogoDetalle detalle={detalle}/>)
        expect(component).toBeTruthy()
    });
 })