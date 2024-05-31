/*
import React, { useState } from 'react';
import { Pie } from '@ant-design/plots';
import data from './processed_mushroom_data.json'; // Import your JSON data

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
                
            </select>
            <Pie {...config} />
        </div>
    );
};

export default DemoPie;
*/
import React, { useState } from 'react';
import { Select } from 'antd';
import { Pie } from '@ant-design/plots';
import data from './processed_mushroom_data.json'; // Import your JSON data

// List of all nominal features
const nominalFeatures = [
    'cap-shape',
    'Cap-surface',
    'cap-color',
    'does-bruise-or-bleed',
    'gill-attachment',
    'gill-spacing',
    'gill-color',
    'stem-root',
    'stem-surface',
    'stem-color',
    'veil-type',
    'veil-color',
    'has-ring',
    'ring-type',
    'Spore-print-color',
    'habitat',
    'season',
];

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
            <div style={{textAlign: 'center'}}>
            <Select value={selectedFeature} 
                    style={{ width: 200, marginRight: 16 } }
                    placeholder="Select Feature"
                    onChange={handleChange}>
                    {/* onChange={(e) => handleChange(e.target.value)}> */}
                        {nominalFeatures.map((feature) => (
                            <option key={feature} value={feature}>
                                {feature.replace(/-/g, ' ')}
                            </option>
                        ))}
            </Select>
            </div>
            <Pie {...config} />
        </div>
    );
};

export default DemoPie;
