import React, { useState } from 'react';
import { Pie } from '@ant-design/plots';
import data from './primary_data.json'; // Import your JSON data

// Process the data to count occurrences of the selected feature
const processData = (data, selectedFeature) => {
    const featureCount = {};

    data.forEach((mushroom) => {
        const featureValue = mushroom[selectedFeature];
        if (featureValue) {
            const values = featureValue.replace(/[\[\]]/g, '').split(', ');

            values.forEach((value) => {
                if (value) {
                    if (!featureCount[value]) {
                        featureCount[value] = 0;
                    }
                    featureCount[value] += 1;
                }
            });
        }
    });

    return Object.keys(featureCount).map((value) => ({
        type: value,
        value: featureCount[value],
    }));
};

const DemoPie = () => {
    const [selectedFeature, setSelectedFeature] = useState('veil-color'); // Default selected feature

    const handleChange = (value) => {
        setSelectedFeature(value);
    };

    const processedData = processData(data, selectedFeature);

    const config = {
        data: processedData,
        angleField: 'value',
        colorField: 'type',
       
        legend: {
            position: 'right',
            offsetY: 0,
            offsetX: 0,
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
            title: {
                content: 'Total',
            },
            content: {
                content: processedData.reduce((acc, curr) => acc + curr.value, 0).toString(),
            },
        },
    };

    return (
        <div>
            <select value={selectedFeature} onChange={(e) => handleChange(e.target.value)}>
                <option value="veil-color">Veil Color</option>
                <option value="cap-color">Cap Color</option>
                <option value="has-ring">Has Ring</option>
                {/* Add more options for other features */}
            </select>
            <Pie {...config} />
        </div>
    );
};

export default DemoPie;