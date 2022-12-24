import React from 'react'
import Column from './Column'

const Table = () => {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Age</th>
            </tr>
            <Column/>
        </table>
    </div>
  )
}

export default Table