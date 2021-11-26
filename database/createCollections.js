/**
 * This file is to create default collections for a database.
 * It also includes validators and indexes for collections.
 */

import db from './index.js'
import chalk from 'chalk'

console.log(chalk.blue('Starting to create collections with validators and indexes.'))
console.group()

const collections = (await db.listCollections().toArray()).map(v => v.name)
console.log(`Dropping all existing collections (if exist): ${collections.join(', ')}.`)
for (const collection of collections) {
	await db.collection(collection).drop()
}

/**
 * users collection.
 */
try {
	console.log('Creating users collection...')
	await db.createCollection('users', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				description: 'User information',
				title: 'users',
				required: ['username', 'password', 'lastVisit'],
				properties: {
					username: {
						bsonType: 'string'
					},
					password: {
						bsonType: 'string'
					},
					email: {
						bsonType: 'string',
						pattern: '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$',
						description: 'Only users with email can find their username (=id) or password.'
					},
					lastVisit: {
						bsonType: 'date',
						description: 'Creation date of user account can be parsed from _id. document._id.getTimesamp()'
					}
				}
			}
		}
	})
	await db.collection('users').createIndex({
		'lastVisit': -1
	})
} catch (err) {
	// console.error(Object.keys(err), err.message, err.codeName)
	if (err.codeName === 'NamespaceExists') {
		console.error(
			`Collection name "${err.message.split('.')[2]}" already exists!`)
	} else {
		console.error(err.message)
	}
}

/**
 * images collection
 */
try {
	console.log('Creating images collection...')
	await db.createCollection('images', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				description: 'Meta data of user uploaded images.',
				title: 'images',
				required: ['comments'],
				properties: {
					comments: {
						bsonType: 'array',
						items: {
							bsonType: 'objectId'
						}
					},
					tags: {
						bsonType: 'array',
						items: {
							bsonType: 'string'
						}
					},
					likes: {
						bsonType: 'array',
						items: {
							title: 'like',
							required: ['date', 'user_id'],
							properties: {
								date: {
									bsonType: 'object'
								},
								user_id: {
									bsonType: 'objectId'
								}
							}
						}
					}
				}
			}
		}
	})
	await db.collection('images').createIndex({
		'tags': 1
	})

	await db.collection('images').createIndex({
		'likes.date': -1
	})
} catch (err) {
	// console.error(Object.keys(err), err.message, err.codeName)
	if (err.codeName === 'NamespaceExists') {
		console.error(
			`Collection name "${err.message.split('.')[2]}" already exists!`)
	} else {
		console.error(err.message)
	}
}

/**
 * comments collection
 */
try {
	console.log('Creating comments collection...')
	await db.createCollection('comments', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				title: 'comments',
				required: ['user_id', 'nestedComments', 'content'],
				properties: {
					user_id: {
						bsonType: 'objectId'
					},
					nestedComments: {
						bsonType: 'array',
						items: {
							bsonType: 'objectId'
						}
					},
					content: {
						bsonType: 'string'
					}
				}
			}
		}
	})
} catch (err) {
	if (err.codeName === 'NamespaceExists') {
		console.error(
			`Collection name "${err.message.split('.')[2]}" already exists!`)
	} else {
		console.error(err.message)
	}
}

/**
 * tags collections
 */
try {
	console.log('Creating tags collection...')
	await db.createCollection('tags', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				title: 'tags',
				properties: {
					likes: {
						bsonType: 'array',
						items: {
							title: 'like',
							required: ['date', 'user_id'],
							properties: {
								date: {
									bsonType: 'object'
								},
								user_id: {
									bsonType: 'objectId'
								}
							}
						}
					}
				}
			}
		}
	})
	await db.collection('tags').createIndex({
		'likes.date': -1
	})

} catch (err) {
	if (err.codeName === 'NamespaceExists') {
		console.error(
			`Collection name "${err.message.split('.')[2]}" already exists!`)
	} else {
		console.error(err.message)
	}
}

const newCollections = (await db.listCollections().toArray()).map(v => v.name)
console.log(chalk.green(`All collections are created. Created collections: ${newCollections.join(', ')}.`))
console.groupEnd()

process.exit()
