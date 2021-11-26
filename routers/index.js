import { Router } from 'express'

const router = new Router()

router.route('/users').
	get().
	post()

router.route('/users/:userId').
	get().
	put().
	delete()

export default router