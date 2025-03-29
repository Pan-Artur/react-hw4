import PropTypes from "prop-types";

import "../Statistics.css";

export const List = ({ stats }) => {
    const uniqueStats = stats.reduce((acc, currentItem) => {
        const existingItem = acc.find(item => item.label === currentItem.label);

        if (existingItem) {
            existingItem.percentage += currentItem.percentage;
        } else {
            acc.push({...currentItem});
        }

        return acc;
    }, []);

  return (
    <ul className="statisticsList">
      {uniqueStats.map(({ id, label, percentage }) => (
        <li className="statisticsItem" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};