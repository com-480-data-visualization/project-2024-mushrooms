import React from 'react';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import mushroomData from './processed_mushroom_data.json'; // Import mushroom data from JSON file

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/wiki/${record.name}`}>{text}</Link>,
  },
  {
    title: 'Family',
    dataIndex: 'family',
    key: 'family',
  },
  {
    title: 'Cap Diameter (cm)',
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
    dataIndex: 'Cap-surface',
    key: 'Cap-surface',
  },
  {
    title: 'Cap Color',
    dataIndex: 'cap-color',
    key: 'cap-color',
  },
  {
    title: 'Does Bruise or Bleed',
    dataIndex: 'does-bruise-or-bleed',
    key: 'does-bruise-or-bleed',
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
    title: 'Stem Height (cm)',
    dataIndex: 'stem-height',
    key: 'stem-height',
  },
  {
    title: 'Stem Width (cm)',
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
    dataIndex: 'Spore-print-color',
    key: 'Spore-print-color',
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

const MushroomTable = () => <Table columns={columns} dataSource={mushroomData} />;

export default MushroomTable;

