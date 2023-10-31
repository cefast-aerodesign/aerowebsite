import React from "react";
import { Swiper } from 'swiper/react';
import 'swiper/css';

const SwiperGeneric = ({ children, ...props }) => (
  <Swiper  {...props}>{children}</Swiper>
);

export default SwiperGeneric;
