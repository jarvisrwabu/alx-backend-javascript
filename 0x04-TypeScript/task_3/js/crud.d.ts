import {RowId, RowElement} from './interface';

export function insertRow(row: RowElement): number {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId: RowId): RowId {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId: RowId, row: RowElement): RowId {
    console.log(`Update row ${rowId}`, row);
  
    return rowId;
  }