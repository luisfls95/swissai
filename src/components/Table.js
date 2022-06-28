import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Checkbox } from "@mui/material";

const Table = (props) => {
    console.log(props.table)
    let tableValues = props.table.table
    
    if (tableValues == undefined) return <>Loading</>
    
    
    let columnsData = []
    let rowsData = []
    let num = 1
    tableValues.headers.map((elem, index) => {       
        if (elem == "Selected"){
            // skip
        }
        else {
            columnsData.push({field: 'col'+num, headerName: elem, width: 80})
            num++
        }   
        
    })

    
    console.log(columnsData)

    tableValues.values.map((element, index) => {
        let obj = {id: element.mix_id}
        columnsData.forEach((elem, index)=> {

            if (elem.headerName == "Selected"){
                // skip
            }
            else obj[elem.field] = element[elem.headerName]
        })

        rowsData.push(obj)
    })

    console.log(rowsData)


    const check = (idArray) => {
        console.log(idArray)
        // fetch mix ids dos ids
        props.checkHandler(idArray)
        
        //send array of ids to map
    }
    
    

    return (<div className="overflow-auto w-full">
        
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rowsData} columns={columnsData} checkboxSelection={true} onSelectionModelChange={check}/>
        </div>
    </div>)
}

export default Table