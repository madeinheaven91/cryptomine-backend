import Router from 'express'
import { UserController } from '../controllers/user.controller'

const router = new(Router as any)();
const userController = new UserController()

router.post('/user', userController.createUser)
router.get('/user/:id', userController.getUser)
router.get('/users', userController.getUsers)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export {router as userRouter}
