import React from 'react'
const orders = [
    { 
      orderId: 1,
      date: '2024-06-01',
      amount: 150.25,
      transactionFees: 3.50
    },
    { 
      orderId: 2,
      date: '2024-06-02',
      amount: 75.80,
      transactionFees: 2.00
    },
    { 
      orderId: 3,
      date: '2024-06-03',
      amount: 200.00,
      transactionFees: 4.25
    },
    { 
      orderId: 4,
      date: '2024-06-04',
      amount: 50.00,
      transactionFees: 1.75
    },
    { 
      orderId: 5,
      date: '2024-06-05',
      amount: 300.50,
      transactionFees: 5.00
    },
    { 
      orderId: 6,
      date: '2024-06-06',
      amount: 180.75,
      transactionFees: 3.25
    },
    { 
      orderId: 7,
      date: '2024-06-07',
      amount: 95.20,
      transactionFees: 2.50
    },
    { 
      orderId: 8,
      date: '2024-06-08',
      amount: 210.00,
      transactionFees: 4.50
    },
    { 
      orderId: 9,
      date: '2024-06-09',
      amount: 123.45,
      transactionFees: 2.75
    },
    { 
      orderId: 10,
      date: '2024-06-10',
      amount: 175.60,
      transactionFees: 3.75
    },
    { 
      orderId: 11,
      date: '2024-06-11',
      amount: 80.00,
      transactionFees: 1.50
    },
    { 
      orderId: 12,
      date: '2024-06-12',
      amount: 250.75,
      transactionFees: 4.75
    },
    { 
      orderId: 13,
      date: '2024-06-13',
      amount: 150.00,
      transactionFees: 3.00
    },
    { 
      orderId: 14,
      date: '2024-06-14',
      amount: 50.50,
      transactionFees: 1.25
    },
    { 
      orderId: 15,
      date: '2024-06-15',
      amount: 175.25,
      transactionFees: 3.50
    },
    { 
      orderId: 16,
      date: '2024-06-16',
      amount: 95.60,
      transactionFees: 2.25
    },
    { 
      orderId: 17,
      date: '2024-06-17',
      amount: 200.50,
      transactionFees: 4.00
    },
    { 
      orderId: 18,
      date: '2024-06-18',
      amount: 125.00,
      transactionFees: 2.50
    },
    { 
      orderId: 19,
      date: '2024-06-19',
      amount: 180.00,
      transactionFees: 3.00
    },
    { 
      orderId: 20,
      date: '2024-06-20',
      amount: 300.00,
      transactionFees: 5.00
    }
  ];
  
const Order = () => {
  return (
    <div className="p-2 border rounded w-full bg-white m-2">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="font-bold">
          <th className="px-6 py-3 text-left text-xs leading-4 tracking-wider">Order ID</th>
          <th className="px-6 py-3 text-left text-xs leading-4 tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs leading-4 tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs leading-4 tracking-wider">Transaction Fees</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.orderId} className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap">{order.orderId}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{order.date}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{order.amount}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{order.transactionFees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Order
