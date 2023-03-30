import React from 'react'
import * as XLSX from 'xlsx/xlsx.mjs';


const data1 = [
    {id: 1, name: 'Reebook Shoes', price: 140.50, color: 'red'},
    {id: 2, name: 'Nike Shoes', price: 112.5, color: 'white'},
    {id: 3, name: 'Adidas Tennis Racquet', price: 100, color: 'red'},
    {id: 4, name: 'Prince Tennis Shoes', price: 250.25, color: 'blue'}
]

const arrayData = [
    ['id', 'name', 'price', 'color'],
    [1, 'Reebook Shoes', 140.50, 'red'],
    [2, 'Nike Shoes', 112.5, 'white'],
    [3, 'Adidas Tennis Racquet', 100, 'red'],
    [4, 'Prince Tennis Shoes', 250.25, 'blue'],
]

const ExcelActasInterventorias = () => {

    // EXAMPLE OF EXPORT EXCEL FILE FROM ARRAY OBJECTS
    const exportExcelFileObject = () =>{
        var workBook = XLSX.utils.book_new()
        var workSheet = XLSX.utils.json_to_sheet(data1)

        XLSX.utils.book_append_sheet(workBook, workSheet, 'MySheet1')
        XLSX.writeFile(workBook, 'MyExcel.xlsx')
    }

    // EXAMPLE OF EXPORT EXCEL FILE FROM ARRAY OF ARRAYS
    const exportExcelFileArray = () => {
        var workBook = XLSX.utils.book_new()
        var workSheet = XLSX.utils.aoa_to_sheet(arrayData)
        XLSX.utils.book_append_sheet(workBook, workSheet, 'MySheet1')
        XLSX.writeFile(workBook, 'MyExcel.xlsx')
    }

    return (
        <div>
            <button onClick={ () => exportExcelFileObject() }>Export xlsx object sheet</button>
            <button onClick={ () => exportExcelFileArray() }>Export xlsx array sheet</button>
        </div>
    );
}

export default ExcelActasInterventorias;
