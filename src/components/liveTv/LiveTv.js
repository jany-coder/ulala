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
      <div class="d-flex flex-sm-row flex-column justify-content-start flex-wrap mb-2">
                <div class="p-1 text-center">
                    <button onClick={()=> setTvChannels(liveTvData)} type="button" class="btn btn-outline-primary w-100">ALL</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'news'))} type="button" class="btn btn-outline-primary">NEWS</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'entertainment'))} type="button" class="btn btn-outline-primary">ENTERTAINMENT</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'sports'))} type="button" class="btn btn-outline-primary">SPORTS</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'music'))} type="button" class="btn btn-outline-primary">MUSIC</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'movies'))} type="button" class="btn btn-outline-primary">MOVIE</button>
                </div>
                <div class="p-1">
                    <button onClick={()=> setTvChannels(liveTvData.filter(tv => tv.type === 'kids'))} type="button" class="btn btn-outline-primary">KIDS</button>
                </div>
            </div>
    </SlideSection>
  );
};

export default LiveTv;