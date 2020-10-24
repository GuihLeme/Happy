import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesCrontroller from './controllers/OrphanagesCrontroller'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanagesCrontroller.index)
routes.get('/orphanages/:id', OrphanagesCrontroller.show)
routes.post('/orphanages', upload.array('images'), OrphanagesCrontroller.create )

export default routes