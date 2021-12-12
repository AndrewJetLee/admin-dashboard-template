export const productData = [
  {
    name:"Sep",
    Sales: 100,
  },
  {
    name: "Nov",
    Sales: 250,
  },
  {
    name: "Dec",
    Sales: 500,
  },
]

export const userData = [
    {
      name: "Jan",
      "Active User": 3490,
    },
    {
      name: "Feb",
      "Active User": 4490,
    },
    {
      name: "Mar",
      "Active User": 1490,
    },
    {
      name: "Apr",
      "Active User": 4490,
    },
    {
      name: "May",
      "Active User": 2490,
    },
    {
      name: "Jun",
      "Active User": 1490,
    },
    {
      name: "Jul",
      "Active User": 5490,
    },
    {
      name: "Aug",
      "Active User": 3490,
    },
    {
      name: "Sep",
      "Active User": 2490,
    },
    {
      name: "Oct",
      "Active User": 1490,
    },
    {
      name: "Nov",
      "Active User": 3490,
    },
    {
      name: "Dec",
      "Active User": 4490,
    },
  ];
  

  export const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "username", headerName: "Username", width: 200, renderCell: (params) => {
        return (
            <div className="userListUser">
                <img className="userListUserImg" src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
  ];
  
  export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar: "http://placekitten.com/g/200/300",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  export const productRows = [
    {
      id: 1,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 2,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 3,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 4,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 5,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 6,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 7,
      product: "Secret Gardens Book",
      image: "http://placekitten.com/g/200/300",
      stock: 123,
      status: "active",
      price: "$120.00",
    },

    
  ]