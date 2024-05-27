import React, { useState } from 'react';
import { Table, Tag, Select } from 'antd';
import { Link } from 'react-router-dom';
import mushroomData from './primary_data.json'; // Import mushroom data from JSON file

const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to={`/wiki/`}>{text}</Link>,
  },
  {
    title: 'Family',
    dataIndex: 'family',
    key: 'family',
  },
  {
    title: 'Cap Diameter',
    dataIndex: 'cap-diameter',
    key: 'cap-diameter',
  },
  {
    title: 'Cap Shape',
    dataIndex: 'cap-shape',
    key: 'cap-shape',
  },
  {
    title: 'Cap Surface',
    dataIndex: 'cap-surface',
    key: 'cap-surface',
  },
  {
    title: 'Cap Color',
    dataIndex: 'cap-color',
    key: 'cap-color',
  },
  {
    title: 'Gill Attachment',
    dataIndex: 'gill-attachment',
    key: 'gill-attachment',
  },
  {
    title: 'Gill Spacing',
    dataIndex: 'gill-spacing',
    key: 'gill-spacing',
  },
  {
    title: 'Gill Color',
    dataIndex: 'gill-color',
    key: 'gill-color',
  },
  {
    title: 'Stem Height',
    dataIndex: 'stem-height',
    key: 'stem-height',
  },
  {
    title: 'Stem Width',
    dataIndex: 'stem-width',
    key: 'stem-width',
  },
  {
    title: 'Stem Root',
    dataIndex: 'stem-root',
    key: 'stem-root',
  },
  {
    title: 'Stem Surface',
    dataIndex: 'stem-surface',
    key: 'stem-surface',
  },
  {
    title: 'Stem Color',
    dataIndex: 'stem-color',
    key: 'stem-color',
  },
  {
    title: 'Veil Type',
    dataIndex: 'veil-type',
    key: 'veil-type',
  },
  {
    title: 'Veil Color',
    dataIndex: 'veil-color',
    key: 'veil-color',
  },
  {
    title: 'Has Ring',
    dataIndex: 'has-ring',
    key: 'has-ring',
  },
  {
    title: 'Ring Type',
    dataIndex: 'ring-type',
    key: 'ring-type',
  },
  {
    title: 'Spore Print Color',
    dataIndex: 'spore-print-color',
    key: 'spore-print-color',
  },
  {
    title: 'Habitat',
    dataIndex: 'habitat',
    key: 'habitat',
  },
  {
    title: 'Season',
    dataIndex: 'season',
    key: 'season',
  },
];

const Detail = () => {
  const [selectedMushroom, setSelectedMushroom] = useState(null);

  const handleSelectChange = (value) => {
    const mushroom = mushroomData.find((mushroom) => mushroom.name === value);
    setSelectedMushroom(mushroom);
  };

  return (
    <div>
      <Select
        placeholder="Select a mushroom"
        style={{ width: 200, marginBottom: 20 }}
        onChange={handleSelectChange}
      >
        {mushroomData.map((mushroom) => (
          <Option key={mushroom.name} value={mushroom.name}>
            {mushroom.name}
          </Option>
        ))}
      </Select>
      {selectedMushroom && (
        <Table
          columns={columns}
          dataSource={[selectedMushroom]}
          rowKey="name"
          pagination={false}
        />
      )}
    </div>
  );
};

export default Detail;
