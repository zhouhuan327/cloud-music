import React, { useState } from 'react';
import Horizen from '../../baseUI/horizen';
import { categoryTypes, alphaTypes } from './config';
import styled from 'styled-components';
export const NavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;
function Singer(props) {
  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');
  let handleUpdateAlpha = (val) => {
    setAlpha(val);
  };

  let handleUpdateCatetory = (val) => {
    setCategory(val);
  };
  return (
    <NavContainer>
      <Horizen
        title="分类 (默认热门):"
        list={categoryTypes}
        active={category}
        onClick={handleUpdateCatetory}
      ></Horizen>
      <Horizen
        title="首字母:"
        list={alphaTypes}
        active={alpha}
        onClick={handleUpdateAlpha}
      ></Horizen>
    </NavContainer>
  );
}

export default React.memo(Singer);
