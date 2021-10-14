/*document.write(variable);

for(i=0; i<=3; i++){
        var variable = variable.innerHTML = `
        <table class=»egt»>
        <tr>
        <th>Hoy</th>
    </tr>
    </table>`;
}   */


function getTabla(variable, variable2, variable3) {
    tabla.innerHTML=`
    <table style="width:100%">
    <tr>
      <th>${variable}</th>
      <th>${variable2}</th>
      <th>${variable3}</th>
    </tr>
    <tr>
        <th>27</th>
        <th>10</th>
        <th>2021</th>
    </tr>
      </table> `;  

    alert('Mi cumple!! :D')

}
getTabla('Dia', 'Mes', 'Año');
