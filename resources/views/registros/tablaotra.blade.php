
</style>
<table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($datos as $dato)
      <tr>
        <td>{{ $dato->nombre }}</td>
        <td>{{ $dato->edad }}</td>
      </tr>
      @endforeach
      
    </tbody>
  </table>