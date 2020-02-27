/* eslint-disable no-unused-vars */
import express, { Request, Response, NextFunction } from 'express'
/* Declare Controllers */
import RoleController from '../controllers/RoleController'

const router = express.Router()

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' })
})

router.post('/role', RoleController.create)

export default router