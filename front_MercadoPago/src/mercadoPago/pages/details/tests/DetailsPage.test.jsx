import { cleanup, render } from '@testing-library/react'
import { DetailsPage } from '../DetailsPage'

describe('<DetailsPage>', () => {
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)

    it('Render component', () => {
        const Component = render(<DetailsPage />)
        expect(Component).toBeTruthy()
        
    });
 })
