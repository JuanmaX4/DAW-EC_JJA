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

function getTablaSinParametros() {
  tabla2.innerHTML=`
  <table style="width:100%">
  <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>ID</th>
  </tr>
  <tr>
      <td>Juanma</td>
      <td>Jimenez</td>
      <td>30262337X</td>
  </tr>
    </table> `;  

  alert('Mi cumple!! :D')

}

getTablaSinParametros();


