import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  margin: auto;
  max-width: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #a2b9bc;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 1);
  text-align: center;
  padding: 5px;
  background-color: ${props =>
    props.index % 2 === 0
      ? `${getRandomHexColor()}`
      : `${getRandomHexColor()}`};
`;

const Label = styled.span`
  margin-bottom: 5px;
  color: white;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Percentage = styled.span`
  color: white;
  font-weight: bold;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((stat, index) => (
          <Item key={stat.id} index={index}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
