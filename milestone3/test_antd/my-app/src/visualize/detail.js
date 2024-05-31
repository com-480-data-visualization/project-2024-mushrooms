import React, { useState, useRef, useEffect } from 'react';
import { Select, Table, Carousel, Checkbox, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import mushroomData from './processed_mushroom_data.json'; // Import mushroom data from JSON file
import WHLight from './WalkHorseLight';
import DemoRadar from './radar';

const { Option } = Select;

// async function checkWikipediaPageExists(mushroomName) {
//   const response = await fetch(`https://en.wikipedia.org/wiki/${encodeURIComponent(mushroomName)}`);
//   const text = await response.text();
//   return !text.includes("Wikipedia does not have an article with this exact name");
// }

const initialColumns = [
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
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

const importantColumns = [
  'class',
  'cap-diameter',
  'cap-shape',
  'cap-color',
  'stem-height',
  'stem-width',
  'habitat',
  'season',
];

const MushroomTable = () => {
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [checkedColumns, setCheckedColumns] = useState(importantColumns);

  const handleSelectChange = (value) => {
    const mushroom = mushroomData.find((mushroom) => mushroom.name === value);
    setSelectedMushroom(mushroom);
  };

  const handleCheckboxChange = (checkedValues) => {
    setCheckedColumns(checkedValues);
  };
  const handleReset = () => {
    setSelectedMushroom(null);
  };
  

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => {
      //   const [hasWikiPage, setHasWikiPage] = useState(false);

      //   useEffect(() => {
      //     async function fetchWikiPage() {
      //       const exists = await checkWikipediaPageExists(text);
      //       setHasWikiPage(exists);
      //     }
      //     fetchWikiPage();
      //   }, [text]);

      //   return true ? (
      //     <Link to={`https://en.wikipedia.org/wiki/${text}`} target="_blank">{text}</Link>
      //   ) : (
      //     <span>{text}</span>
      //   );
      // },
    },
    {
      title: 'Family',
      dataIndex: 'family',
      key: 'family',
    },
    ...initialColumns.filter(col => checkedColumns.includes(col.key))
  ];

  return (
    <div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Select
          showSearch
          placeholder="Select a mushroom"
          style={{ width: 200, marginRight: 20, marginLeft: 20 }}
          onChange={handleSelectChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {mushroomData.map((mushroom) => (
            <Option key={mushroom.name} value={mushroom.name}>
              {mushroom.name}
            </Option>
          ))}
        </Select>
        <Button onClick={handleReset} >RESET</Button>
        {/*if selected mushroom, display the DemoRadar component*/}
        {selectedMushroom && <DemoRadar mushroom={selectedMushroom} />}

      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
        {initialColumns.map(col => (
          <Col key={col.key}>
            <Checkbox
              checked={checkedColumns.includes(col.key)}
              onChange={(e) => {
                const newCheckedColumns = e.target.checked
                  ? [...checkedColumns, col.key]
                  : checkedColumns.filter(key => key !== col.key);
                handleCheckboxChange(newCheckedColumns);
              }}
            >
              {col.title}
            </Checkbox>
          </Col>
        ))}
      </Row>

      <Table
        columns={selectedMushroom ? columns : columns}
        dataSource={selectedMushroom ? [selectedMushroom] : mushroomData}
        rowKey="name"
      />
    </div>
  );
};

export default MushroomTable;
