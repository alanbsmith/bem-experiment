import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = styled.div`
  align-items: ${props => props.alignItems};
  background-color: #607d8b;
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: ${props => props.justifyContent};
  min-height: ${props => props.minHeight};
  padding: 5px;
`;

Header.Icon = Icon;
Header.Subtitle = Subtitle;
Header.Title = Title;

Header.propTypes = {
  alignItems: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
  minHeight: PropTypes.string.isRequired,
};

Header.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
};

export default Header;
