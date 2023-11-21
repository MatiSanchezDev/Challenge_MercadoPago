import { cleanup, render } from '@testing-library/react'
import { MostrarDetalles } from '../components/MostrarDetalles'

describe('<MostrarDetalles>', () => {
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)
    
    const data = {
        id:"1",
        title:"Cobro en efectivo",
        type:"cash",
        description:"Caja 2",
        amount:"751,61"
    }
    const loading = true
    const error = false

    it('Render component', () => {
        const component = render(<MostrarDetalles data={data} loading={loading} error={error}/>)
        expect(component).toBeTruthy()
    });
 })