import Router from 'express'
import { UserController } from '../controllers/user.controller'

const router = new(Router as any)();
const userController = new UserController()

router.post('/user', userController.createUser)
router.get('/user/:userid', userController.getUser)
router.get('/users', userController.getUsers)
router.put('/user/:userid', userController.updateUser)
router.delete('/user/:userid', userController.deleteUser)

export {router as userRouter}
