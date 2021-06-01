import React, { useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { formatDate } from '../../../utils/utilsFuncs';

const LineChart = ({
  statisticsData,
  high,
  low,
  about,
  currency,
  xTitle,
  yTitle,
}) => {
  const pointColor = useCallback((ctx, low, high) => {
    if (ctx.raw === low) {
      return 'yellowgreen';
    }

    if (ctx.raw === high) {
      return 'red';
    }

    return '#0277bd';
  }, []);

  const xTitleConfig = xTitle
    ? {
        display: true,
        title: {
          display: true,
          text: xTitle,
          color: '#0277bd',
          font: {
            family: 'arial',
            size: 12,
            weight: 'bold',
            lineHeight: 1,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      }
    : {};

  const yTitleConfig = yTitle
    ? {
        display: true,
        title: {
          display: true,
          text: yTitle,
          color: '#0277bd',
          font: {
            family: 'arial',
            size: 12,
            weight: 'bold',
            lineHeight: 1,
          },
          padding: { top: 5, left: 0, right: 0, bottom: 5 },
        },
      }
    : {};

  const data = {
    labels: statisticsData.map((data) =>
      formatDate(data.date, 'en-US', {
        year: 'numeric',
        month: 'short',
      })
    ),
    datasets: [
      {
        label: 'Price',
        data: statisticsData.map((data) => data.price),
        fill: false,
        backgroundColor: (ctx) => pointColor(ctx, low, high),
        borderColor: (ctx) => pointColor(ctx, low, high),
        borderWidth: 1.2,
        pointStyle: 'circle',
        radius: 3.5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: low > 3000 ? low - 3000 : low,
        ...yTitleConfig,
      },
      x: xTitleConfig,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `All ${statisticsData.length} ${about} (${currency})`,
        padding: {
          top: 15,
          bottom: 15,
        },
        align: 'start',
        color: '#0277bd',
        fullSize: true,
        font: {
          size: 14,
          weight: 'normal',
        },
      },
      interaction: {
        intersect: false,
        mode: 'nearest',
      },

      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    elements: {
      point: {
        hoverRadius: 6,
      },
    },

    responsive: true,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
