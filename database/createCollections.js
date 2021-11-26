/**
 * This file is to create default collections for a database.
 * It also includes validators and indexes for collections.
 */

import db from './index.js'
import chalk from 'chalk'

console.log(chalk.blue('Starting to create collections with validators and indexes.'))
console.group()

/**
 * users collection.
 */

console.log('Creating users collection...')

/**
 * images collection
 */

console.log('Creating images collection...')

/**
 * comments collection
 */

console.log('Creating comments collection...')

/**
 * tags collections
 */

console.log('Creating tags collection...')

console.log(chalk.green(
	`All collections are created. Created collections: .`))
console.groupEnd()

