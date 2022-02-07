//https://react-table.tanstack.com/docs/examples/pagination
import React from 'react'
import {DivTable,Option,Span,Select,Styles} from './style'
import TablePagination from './tablePagination'
import { useTable, usePagination } from 'react-table'


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <DivTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <TablePagination
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
        />
        <Option>
          <Span>show:</Span>
            <Select
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}>
                {[5, 10, 15, 20, 25].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize} rows
                  </option>
          ))}
            </Select>
        </Option>
      </div>
    </DivTable>
  )
}

function TablePag() {
  const columns = [
          {
            Header: 'TRANSACTION ID',
            accessor: 'id',
          },
          {
            Header: 'TRANSACTION TYPE',
            accessor: 'type',
          },
          {
            Header: 'TIME',
            accessor: 'time',
          },
          {
            Header: 'TOTAL AMOUNT',
            accessor: 'totalamount',
          },
          {
            Header: 'BUYER',
            accessor: 'buyer',
          },
          {
            Header: 'SELLER',
            accessor: 'seller',
          }
    ]
  
  const data=[
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 4 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 8 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 1 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 1 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    }
  ]

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TablePag;
