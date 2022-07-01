import * as React from 'react';

const SvgPlay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: '#bfdcff',
      }}
      d="M0 256c0 141.384 114.615 256 256 256l22.261-256L256 0C114.615 0 0 114.615 0 256z"
    />
    <path
      style={{
        fill: '#8bc0ff',
      }}
      d="M256 0v512c141.384 0 256-114.616 256-256S397.384 0 256 0z"
    />
    <path
      style={{
        fill: '#3897ff',
      }}
      d="M181.868 144.696v222.608l74.132-42.8L278.261 256 256 187.496z"
    />
    <path
      style={{
        fill: '#2d79cc',
      }}
      d="M256 187.496v137.008L374.654 256z"
    />
  </svg>
);

export default SvgPlay;
