import PropTypes from 'prop-types';
import { Heading, Item, LabelCss, PercentageCss, StatList, Statistic } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      <Heading>{title}</Heading>

      <StatList>
        {stats.map(statist => (
          <Item key={statist.id} color={getRandomHexColor()}>
            <LabelCss>{statist.label}</LabelCss>
            <PercentageCss>{statist.percentage}%</PercentageCss>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title:PropTypes.string,
  stats:PropTypes.array,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


