import React from 'react';
import { Collapse } from 'antd';
import './styles.css';  
const { Panel } = Collapse;

const FAQs = () => {
  return (
    <>
    <div className="faq-container">
      <h1>FAQs</h1>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="What services do you offer?" key="1">
          <p>We provide a wide range of services, including SEO, content marketing, social media management, PPC, and web development.</p>
        </Panel>
        <Panel header="How do I get started with your agency?" key="2">
          <p>To get started, you can fill out a contact form on our website, and one of our representatives will reach out to discuss your needs.</p>
        </Panel>
        <Panel header="What makes your agency different from others?" key="3">
          <p>We pride ourselves on our personalized approach, data-driven strategies, and transparent communication with clients.</p>
        </Panel>
        <Panel header="How long does it take to see results from your marketing campaigns?" key="4">
          <p>It depends on the campaign type and goals, but typically, you can expect to see results in 2-3 months with consistent efforts.</p>
        </Panel>
        <Panel header="What is your pricing structure?" key="5">
          <p>Our pricing is customized based on the services you need. We offer flexible packages to fit your budget and goals.</p>
        </Panel>
      </Collapse>
    </div>
    </>
  );
}

export default FAQs;
