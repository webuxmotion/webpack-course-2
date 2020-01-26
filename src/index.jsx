import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/test'
import './babel'
import PGLogo from './assets/pg-logo'
import xml from './assets/data'
import csv from './assets/data'
import './styles/styles'
import './styles/less'
import './styles/sass.scss'
import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Webpack plugin</h1>
    <hr/>
    <hr/>
    <pre/>
    <div className="box">
        <h2>Less</h2>
    </div>
    <div className="card">
        <h2>Scss</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))

const post = new Post('Webpack Post Title', PGLogo)
console.log(post.toString())

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)

$('pre').addClass('code').html(post.toString())