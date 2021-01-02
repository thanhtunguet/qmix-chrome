import Tabs from 'antd/lib/tabs';
import Typography from 'antd/lib/typography';
import React from 'react';
import {HashRouter} from 'react-router-dom';

const {TabPane} = Tabs;

export default function Help() {
  return (
    <HashRouter>
      <div className="container d-flex flex-column justify-content-center align-content-center align-items-center">
        <Typography.Title>English Dictionaries</Typography.Title>
        You need support? Send us an email to
        <a href="mailto:<ht@thanhtunguet.info>"> ht@thanhtunguet.info </a>
        <div className="w-100 d-flex flex-column justify-content-start align-items-start align-content-start">
          <Typography.Text>Features:</Typography.Text>

          <ul>
            <li>
              Click onto headwords, definitions, examples to copy text and paste
              anywhere
            </li>
            <li>
              Add an button to download file right after where an audio file
              placed. You can quickly download the file in mp3 format and insert
              into your presentation.
            </li>
            <li>
              Reduce the number of advertisements. Let you focus on your work!
            </li>
          </ul>
        </div>
        <Typography.Title>Screenshots</Typography.Title>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Cambridge Dictionary" key="1">
            <a
              target="_blank"
              href="https://dictionary.cambridge.org/dictionary/english/dictionary">
              <img
                className="screenshot"
                alt="cambridge"
                src="images/screenshot-cambridge.png"
              />
            </a>
          </TabPane>
          <TabPane tab="Oxford Dictionary" key="2">
            <a
              target="_blank"
              href="https://www.oxfordlearnersdictionaries.com/definition/english/dictionary?q=dictionary">
              <img
                className="screenshot"
                alt="oxford"
                src="images/screenshot-oxford.png"
              />
            </a>
          </TabPane>
        </Tabs>
      </div>
    </HashRouter>
  );
}
