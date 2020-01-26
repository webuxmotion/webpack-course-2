import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/test'
import PGLogo from './assets/pg-logo'
import xml from './assets/data'
import csv from './assets/data'
import './styles/styles'
import './styles/less'
import './styles/sass.scss'

const post = new Post('Webpack Post Title', PGLogo)
console.log(post.toString())

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)

$('pre').addClass('code').html(post.toString())