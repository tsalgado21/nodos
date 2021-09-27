import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import { rawData } from './data/rawData'
import { TableComponent } from './component/TableComponent'

ReactDom.render(
  <TableComponent data={rawData}/>, 
  document.getElementById('root')
);