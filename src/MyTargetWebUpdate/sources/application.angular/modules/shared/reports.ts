export default (name : string, data : Array<any>, metadata : arbor.reports.IReportData) => {

  var header = '';
  for(var col in metadata){
    header += `<th>${metadata[col]}</th>`
  }
  header = `<tr>${header}</tr>`;

  var body = '';
  for(var row in data){
    var rowHtml = ''
    for(var col in metadata){
      rowHtml += `<td>${data[row][col]}</td>`;
    }
    body += `<tr>${rowHtml}</tr>`;
  }
  window.open(`data:application/vnd.ms-excel,<table id="datatable">${header}${body}</table>`.replace(/ /g, '%20'));
};
