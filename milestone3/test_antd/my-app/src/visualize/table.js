import React, {useEffect, useState} from 'react';
import { Typography, Layout, Timeline, Radio } from 'antd';
import Carousel from './WalkHorseLight';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const MushroomStory = () => {
  const [mode, setMode] = useState('alternate');
  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <Carousel />
        <Typography>
          <Title level={1} style={{textAlign: 'center', color: '#3f51b5' }}>The Enchanted Forest of Mushrooms</Title>

            <Radio.Group
              onChange={onChange}
              value={mode}
              style={{
                marginBottom: 20,
              }}
            >
              <Radio value="left">Left</Radio>
              <Radio value="right">Right</Radio>
              <Radio value="alternate">Alternate</Radio>
            </Radio.Group>

          <Timeline mode={mode}>
            <Timeline.Item>
              <Title level={3}>Bases of the Stems</Title>
              <Paragraph>
                The surfaces of the stems ranged from smooth and polished to fibrous and scaly. Some stems had rings—structures left behind by the partial veils that once covered the gills during the mushroom's development. These rings added another layer of complexity and beauty to the mushrooms' appearance.
              </Paragraph>
              <Paragraph>
                The bases of the stems, or stipes, also had their own characteristics. Some mushrooms had bulbous bases, swelling out like tiny bulbs, while others tapered off into the ground. The texture and color of the base could differ from the rest of the stem, adding to the mushroom's overall intrigue.
              </Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={2}>The Life Cycle of Spores</Title>
              <Paragraph>
                As the mushrooms grew and matured, they released their spores—tiny, dust-like particles that floated away to start new colonies. The spores were critical to the mushrooms' lifecycle, allowing them to spread and colonize new areas of the forest. The spore print, a mark left by the falling spores, was another way to identify and classify these fascinating fungi.
              </Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={2}>The Varied Habitats</Title>
              <Paragraph>
                These mushrooms thrived in various habitats within the forest. Some preferred the cool, damp conditions of the forest floor, nestled among the leaf litter and decaying wood. Others grew on the sides of trees, both living and dead, finding nourishment from the wood. There were those that thrived in grasslands, pushing their way through the soil to reach the light.
              </Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={2}>Ecological Roles</Title>
              <Paragraph>
                The mushrooms played essential roles in the ecosystem. They were decomposers, breaking down dead organic matter and returning nutrients to the soil. Some formed symbiotic relationships with trees, exchanging nutrients in a mutually beneficial partnership. Others were parasitic, feeding off living hosts in a delicate balance of life and death.
              </Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={2}>Guardians of the Forest</Title>
              <Paragraph>
                In this grand, enchanted forest, the mushrooms were more than just fungi. They were storytellers, each with a unique tale woven into the intricate web of life. They were the forest's silent sentinels, standing as guardians of the ecosystem, contributing to the delicate balance of nature. And so, the story of the mushrooms continued, a testament to the incredible diversity and wonder of the natural world.
              </Paragraph>
            </Timeline.Item>
          </Timeline>
        </Typography>
      </Content>
    </Layout>
  );
};

export default MushroomStory;
