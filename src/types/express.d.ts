import Coil from '../models/Coil.model'

declare global {
    namespace Express {
        interface Request {
            coil?: Coil
        }
    }
}