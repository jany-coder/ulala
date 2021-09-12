import React, { useEffect, useState } from 'react';
import './_liveTv.scss';
import liveTvData from '../../data/liveTvData';
import LiveTvCard from '../liveTvCard/LiveTvCard';
import SlideSection from '../shared/slideSection/slide/Slide';
import CustomSlick from '../shared/customSlick/CustomSlick';

const LiveTv = () => {

  const [tvChannels, setTvChannels] = useState([]);

  useEffect(() => {
    setTvChannels(liveTvData)
  }, [])

  return (
    <SlideSection title="TV Channels" Link="/channel/all">
      <CustomSlick>
        {
          tvChannels.map(tv => <LiveTvCard tv={tv} />)
        }
      </CustomSlick>
    </SlideSection>
  );
};

export default LiveTv;