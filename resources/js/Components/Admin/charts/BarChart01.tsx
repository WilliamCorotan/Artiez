import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const BarChart01 = ({artworks}) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const artStyle = artworks.map(item => item.art_style)
  const labels = Array.from(new Set(artStyle))
  const map = artStyle.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Art Style',
      },

    },    
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Artworks Sold',
        data: map,
        backgroundColor: 'rgb(251,113,133)',
      },

    ],
  };
  return (

    <Bar datasetIdKey='artStyle' options={options} data={data} />

  )
}

export default BarChart01


