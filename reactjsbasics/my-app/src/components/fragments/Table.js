import React from 'react'
import Column from './Column'

const Table = () => {
  return (
    <>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Age</th>
            </tr>
            <Column/>
        </table>
    </>
  )
}

export default Table