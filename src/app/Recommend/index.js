import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import Scroll from '../../baseUI/Scroll';
import Loading from '../../baseUI/loading';
import { Content } from './style';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import { forceCheck } from 'react-lazyload';
function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
  useEffect(() => {
    if (!bannerList.length) {
      getBannerDataDispatch();
    }
    if (!recommendList.length) {
      getRecommendListDataDispatch();
    }

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="before"></div>
      <Content>
        {enterLoading && <Loading></Loading>}
        <Scroll className="list" onScroll={forceCheck}>
          <div>
            <Slider bannerList={bannerList}></Slider>
            <RecommendList recommendList={recommendList}></RecommendList>
          </div>
        </Scroll>
      </Content>
    </>
  );
}

const mapStateToProps = (state) => ({
  bannerList: state.recommend.bannerList,
  recommendList: state.recommend.recommendList,
  enterLoading: state.recommend.enterLoading,
});

// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
