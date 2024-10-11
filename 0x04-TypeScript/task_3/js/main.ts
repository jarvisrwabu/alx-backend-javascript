/// <reference path="./crud.d.ts" />

import {RowId, RowElement} from './interface';
import * as CRUD from './crud';
import { insertRow } from './crud';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

const newRowId: RowId = CRUD.insertRow(row);
const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
}

CRUD.updateRow(newRowId,updatedRow);
CRUD.deleteRow(newRowId);