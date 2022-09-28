import '../assets/style/pedido.css'
import Card from './Card'

function pedidos() {
 
    const users = [
      {
        id:1,
        name: "Juan",
        lastName: "jose",
        icecream:" Sabor Vainilla",
      },
      {
        id:2,
        name: "miguel",
        lastName: "miguel",
        icecream:" Napolitano",
      },
      {
        id:3,
        name: "Diego",
        lastName: "Camacho",
        icecream: "Fresa y chocolate "
      },
      {
        id:4,
        name: "jesus",
        lastName: "Alonso",
        icecream: "Oreo"
      },
      {
        id:5,
        name: "Alonso",
        lastName: "Ochoa",
        icecream:"pistache"
      },
      
    ];
  
    return (
        <div className="container">
            <h2>Lista de pedidos Populares De Nuestro Clientes</h2>
            {users.map((user)=> {
                return (
                    <Card 
                      key={user.id}
                      name={user.name}
                      lastName={user.lastName}
                      icecream={user. icecream}
                    />
                )
            })}
        </div>
    );
  }
  

  export default pedidos;
