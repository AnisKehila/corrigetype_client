import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
export default function Circle({ratio, activeColor, nonActiveColor}) {
    const chartContainer = useRef(null);
    useEffect(() => {
        const chartData = {
            datasets: [{
                data: [ratio, 100-ratio],
                borderWidth: 0,
                backgroundColor: [
                    activeColor,
                    nonActiveColor,
                ],
                hoverBackgroundColor: [
                    activeColor,
                    nonActiveColor,
                ],
            }]
        };

        const chartOptions =  {
            cutout: '68%',
            plugins: {
                tooltip: {
                    enabled: false 
                },
            }
        }
        const chartConfig = {
            type: 'doughnut',
            data: chartData,
            options: chartOptions
        };

        const myChart = new Chart(chartContainer.current, chartConfig);
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
    <div className='circle'>
        <canvas ref={chartContainer} />
        <span className="value" style={{color: activeColor}}>{ratio}%</span>
    </div>
    );
};        
