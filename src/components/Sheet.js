import React from 'react'
import Cell from './Cell'
import '../App.css'

export default class Sheet extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <Cell value="A" />
          <Cell id="a1"/>
          <Cell id="a2" />
          <Cell id="a3" />
          <Cell id="a4" />
          <Cell id="a5" />
          <Cell id="a6" />
          <Cell id="a7" />
          <Cell id="a8" />
          <Cell id="a9" />
          <Cell id="a10" />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Cell value="B" />
          <Cell id="b1"/>
          <Cell id="b2" />
          <Cell id="b3" />
          <Cell id="b4" />
          <Cell id="b5" />
          <Cell id="b6" />
          <Cell id="b7" />
          <Cell id="b8" />
          <Cell id="b9" />
          <Cell id="b10" />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Cell value="C" />
          <Cell id="c1"/>
          <Cell id="c2" />
          <Cell id="c3" />
          <Cell id="c4" />
          <Cell id="c5" />
          <Cell id="c6" />
          <Cell id="c7" />
          <Cell id="c8" />
          <Cell id="c9" />
          <Cell id="c10" />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Cell value="D" />
          <Cell id="d1"/>
          <Cell id="d2" />
          <Cell id="d3" />
          <Cell id="d4" />
          <Cell id="d5" />
          <Cell id="d6" />
          <Cell id="d7" />
          <Cell id="d8" />
          <Cell id="d9" />
          <Cell id="d10" />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Cell value="E" />
          <Cell id="e1"/>
          <Cell id="e2" />
          <Cell id="e3" />
          <Cell id="e4" />
          <Cell id="e5" />
          <Cell id="e6" />
          <Cell id="e7" />
          <Cell id="e8" />
          <Cell id="e9" />
          <Cell id="e10" />
        </div>
      </div>
    )
  }
}
