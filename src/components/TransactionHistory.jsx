import styled from 'styled-components';
import PropTypes from 'prop-types';

const Transaction = styled.table`
  margin: 0 auto;
`;

const Theader = styled.th`
  width: 200px;
  background-color: #87bdd8;
  color: white;
  text-transform: uppercase;
`;

const Tablerow = styled.tr`
  text-transform: capitalize;
  text-align: center;
  &:nth-child(even) {
    background-color: #cfe0e8;
  }
`;

const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <Theader>Type</Theader>
          <Theader>Amount</Theader>
          <Theader>Currency</Theader>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tablerow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tablerow>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionHistory;
