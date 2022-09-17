export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  }, 
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "isAdmin",
    headerName: "IsAdmin",
    width: 100,
  },
  {
    field: "isDriver",
    headerName: "IsDriver",
    width: 100,
  },
  {
    field: "isFinance",
    headerName: "IsFinance",
    width: 100,
  },
  {
    field: "cashier",
    headerName: "Cashier",
    width: 100,
  },
  {
    field: "isCommunityManager",
    headerName: "IsCommunityManager",
    width: 120,
  },
  {
    field: "isManager",
    headerName: "IsManager",
    width: 100,
  },
];

export const orderColumns =[
  { field: "id", headerName: "ID", width: 15 },
  {
    field: "customerId",
    headerName: "Customer ID",
    width: 230,
  },

  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: 170,
  },
  {
    field: "IdCardNumber",
    headerName: "ID CARD",
    width: 150,
  },
  {
    field: "BusName",
    headerName: "Bus Name",
    width: 150,
  },
  {
    field: "BusMatricule",
    headerName: "Bus Matricule",
    width: 150,
  },
  {
    field: "BusTime",
    headerName: "Bus Time",
    width: 120,
  },
  {
    field: "BusDay",
    headerName: "Bus Day",
    width: 100,
  },
  {
    field: "seatsTaken",
    headerName: "Seats Taken",
    width: 100,
  },
  {
    field: "BusSource",
    headerName: "Source",
    width: 100,
  },
  {
    field: "BusDestination",
    headerName: "Destination",
    width: 100,
  },
  {
    field: "total",
    headerName: "Paid",
    width: 100,
  },
  {
    field: "delivery_status",
    headerName: "Status",
    width: 100,
  },
]
export const BusColumns =[
  { field: "id", headerName: "ID", width: 15 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "matricule",
    headerName: "Matricule",
    width: 150,
  },
  {
    field: "seats",
    headerName: "Seats",
    width: 100,
  },
  {
    field: "day",
    headerName: "Day",
    width: 100,
  },
  {
    field: "time",
    headerName: "Time",
    width: 100,
  },
  {
    field: "priceSeat",
    headerName: "Price Per Seat",
    width: 150,
  },
  {
    field: "source",
    headerName: "Source",
    width: 100,
  },
  {
    field: "Destination",
    headerName: "Destination",
    width: 120,
  },
  {
    field: "availability",
    headerName: "Availability",
    width: 100,
  },
]