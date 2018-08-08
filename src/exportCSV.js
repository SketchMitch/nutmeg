
export const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray 
    let str = '' 

    for ( let i = 0;  i < array.length;  i++ ) {
        let line = '' 
        for (let j in array[i]) {
            if (line !== '') line += ','

            line += array[i][j] 
        }
        str += line + '\r\n' 
    }
    return str 
}

export const exportCSVFile = (headers, data, fileTitle) => {
    let tmpData = data
    if (headers) {
        tmpData.unshift(headers)    
    } 
    
    // Convert Object to JSON
    let jsonObject = JSON.stringify(tmpData) 

    let csv = convertToCSV(jsonObject) 

    let exportedFileName = fileTitle + '.csv' || 'export.csv' 

    let blob = new Blob([csv], { type: 'text/csv charset=utf-8 ' }) 
    
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFileName) 
    } else {
        let link = document.createElement("a") 
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            let url = URL.createObjectURL(blob) 
            link.setAttribute("href", url) 
            link.setAttribute("download", exportedFileName) 
            link.style.visibility = 'hidden' 
            document.body.appendChild(link) 
            link.click() 
            document.body.removeChild(link) 
        }
    }
}