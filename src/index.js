import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/styles'
import json from './assets/test'
import PGLogo from './assets/pg-logo'
import xml from './assets/data'
import csv from './assets/data'

const post = new Post('Webpack Post Title', PGLogo)
console.log(post.toString())

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)

$('pre').addClass('code').html(post.toString())