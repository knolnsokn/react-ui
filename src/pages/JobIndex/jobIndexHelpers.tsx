import { DefaultCellRenderer } from 'components/Table/defaults'
import {
  DateRangeColumnFilter,
  NumberRangeColumnFilter,
  SelectionColumnFilter,
} from 'components/Table/filters'
import { useMemo } from 'react'
import { Column } from 'react-table'
import { ObjectWithStringKeys } from 'types/custom-types'

export interface JobTableData extends ObjectWithStringKeys {
  name: JSX.Element
  status: string
  system: JSX.Element
  instance: string
  command: string
  nextRun: string
  success: number
  error: number
}

export const useJobColumns = () => {
  return useMemo<Column<JobTableData>[]>(
    () => [
      {
        Header: 'Name',
        Cell: DefaultCellRenderer,
        accessor: 'name',
        filter: 'fuzzyText',
        minWidth: 120,
        maxWidth: 180,
        width: 130,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectionColumnFilter,
        filter: 'includes',
        selectionOptions: ['RUNNING', 'PAUSED', 'ERROR', 'SUCCESS'],
        minWidth: 120,
        maxWidth: 180,
        width: 130,
      },
      {
        Header: 'System',
        Cell: DefaultCellRenderer,
        accessor: 'system',
        filter: 'fuzzyText',
        minWidth: 120,
        maxWidth: 180,
        width: 130,
      },
      {
        Header: 'Instance',
        accessor: 'instance',
        filter: 'fuzzyText',
        minWidth: 120,
        maxWidth: 180,
        width: 130,
      },
      {
        Header: 'Command',
        accessor: 'command',
        filter: 'fuzzyText',
        minWidth: 130,
        maxWidth: 180,
        width: 140,
      },
      {
        Header: 'Next Run Time',
        Filter: DateRangeColumnFilter,
        filter: 'betweenDates',
        accessor: 'nextRun',
        minWidth: 200,
        maxWidth: 300,
        width: 250,
      },
      {
        Header: 'Success Count',
        Filter: NumberRangeColumnFilter,
        filter: 'between',
        accessor: 'success',
        minWidth: 120,
        maxWidth: 180,
        width: 145,
      },
      {
        Header: 'Error Count',
        Filter: NumberRangeColumnFilter,
        filter: 'between',
        accessor: 'error',
        minWidth: 120,
        maxWidth: 180,
        width: 130,
      },
    ],
    [],
  )
}
