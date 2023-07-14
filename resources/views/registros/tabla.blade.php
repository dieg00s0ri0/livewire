<style>
   .pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

.pagination li {
  margin-right: 5px;
}

.pagination li a {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eaeaea;
  color: #333;
  text-decoration: none;
}

.pagination li a:hover {
  background-color: #ccc;
}
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
      <div class="pagination">
        {{ $datos->links() }}
      </div>
    </tbody>
  </table>