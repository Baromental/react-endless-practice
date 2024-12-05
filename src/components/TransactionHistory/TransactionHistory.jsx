import React from 'react';

export const TransactionHistory = ({transactions}) => {
  return <section>
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr id={transaction.id}>
              <th>{transaction.type}</th>
              <th>{transaction.amount}</th>
              <th>{transaction.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  
  // <table class="transaction-history">
  //   <thead>
  //     <tr>
  //       <th>Type</th>
  //       <th>Amount</th>
  //       <th>Currency</th>
  //     </tr>
  //   </thead>

  //   <tbody>
  //     <tr>
  //       <td>Invoice</td>
  //       <td>125</td>
  //       <td>USD</td>
  //     </tr>
  //     <tr>
  //       <td>Withdrawal</td>
  //       <td>85</td>
  //       <td>USD</td>
  //     </tr>
  //   </tbody>
  // </table>
}

