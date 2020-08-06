import React, { memo } from 'react';
import Scroll from '../Scroll/index';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
  display: inline-flex;
  white-space: nowrap;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: inline-flex;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${({ theme }) => theme['font-size-m']};
  }
`;
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${({ theme }) => theme['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.active {
    color: ${(theme) => theme['theme-color']};
    border: 1px solid ${({ theme }) => theme['theme-color']};
    opacity: 0.8;
  }
`;
const Horizen = (props) => {
  const { list, title, onClick, active } = props;
  return (
    <Scroll direction="horizental">
      <List>
        <span>{title}</span>
        {list.map((item) => (
          <ListItem
            key={item.key}
            className={`${active === item.key ? 'active' : ''}`}
            onClick={() => onClick(item.key)}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </Scroll>
  );
};
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null,
};

Horizen.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  handleClick: PropTypes.func,
  activeVal: PropTypes.string,
};
export default memo(Horizen);
