/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import SchemeSwitch from '../components/SchemeSwitch';
import SubscriptionBlock from '../components/SubscriptionBlock';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ImportSnippet from './ImportSnippet';
import CardBlock from '../components/CardBlock';
import Hero from '../components/Hero';
import SmallSignUpCard from '../components/SmallSignUpCard';
import BigSignUpCard from '../components/BigSignUpCard';
import FeatureBlock from '../components/FeatureBlock';
import cloudIcon1 from '../assets/cubecloud_icon1.svg';
import cloudIcon2 from '../assets/cubecloud_icon2.svg';
import cloudIcon3 from '../assets/cubecloud_icon3.svg';
import cloudIcon4 from '../assets/cubecloud_icon4.svg';
import cloudIllustration1 from '../assets/cube-cloud-illustration.svg';
import cloudIllustration2 from '../assets/cube-cloud-illustration2.svg';
import SwitchBlock from '../components/SwitchBlock';


const TYPES = [
  {
    image: cloudIllustration1,
    id: 'hybrid',
    heading: 'Hybrid',
    description: 'With Cube Cloud Hybrid you can provision and manage the whole Cube.js stack with your cloud. Kubernetes based deployment ensures only one way connection from your cluster to the Cube Cloud. Your cluster pulls Kubernetes and images to install.',
  },
  {
    image: cloudIllustration2,
    id: 'hosted',
    heading: 'Hosted',
    description: 'Deploy fully managed Cube.js apps in the cloud of your choice: AWS, Azure, or GCP. With best-in-class infrastructure and proven practices, Cube Cloud guarantees high availability, scalability, and improved performance.',
  },
  {
    image: cloudIllustration1,
    id: 'onprem',
    heading: 'On-prem',
    description: 'With Cube Cloud Hybrid you can provision and manage the whole Cube.js stack with your cloud. Kubernetes based deployment ensures only one way connection from your cluster to the Cube Cloud. Your cluster pulls Kubernetes and images to install.',
  },
];

const FEATURES = [
  {
    image: cloudIcon1,
    heading: 'Managed Infrastructure',
    description: 'Provision every piece of Cube.js infrastructure starting from clusters of Cube.js instances to a Redis cache and external pre-aggregation databases.',
  },
  {
    image: cloudIcon2,
    heading: 'Trace and Inspect Queries',
    description: 'Inspect the execution time of each query and their lifecycle. Get insights into query queues and background refreshes.',
  },
  {
    image: cloudIcon3,
    heading: 'Pre-Aggregations Management',
    description: 'Analyze your pre-aggregation refresh rate and time. Use Cube Cloud suggestions to select the best possible pre-aggregation for a given query.',
  },
  {
    image: cloudIcon4,
    heading: 'Monitoring & Analytics',
    description: 'Monitor the performance of a query with metrics such as response time, pre-aggregation, refresh rate, and more.',
  },
];

const HOVER_STYLES = {
  mark: '#special.12 :special[#special-text.20]',
  border: '1bw :clear[hidden] :special[#special-text.20]'
};
const PRESSED_STYLES = {
  mark: '#special.12 :special[#special-text.20]',
  border: '#special :special[1bw] :clear[1bw]',
};
const FOCUS_STYLES = {
  outline: 'y',
};
const DISABLED_STYLES = {
  disabled: '',
};

export default function Showcase() {
  return (<nu-flow id="showcase" gap="2x" padding="2x||1x">
    <nu-attrs for="code" radius="" overflow="auto no" inset=".5x" padding="1x 2x" fill="main-bg"/>

    <nu-pane content="space-between">
      <nu-h1>Cube.js UIKit Showcase</nu-h1>
      <nu-pane>
        <SchemeSwitch/>
      </nu-pane>
    </nu-pane>

    <nu-attrs for="example" gap="2x" columns="1pr 2pr||1fr" items="start stretch"></nu-attrs>
    <nu-attrs for="preview" padding="2x left" border="1ow left"></nu-attrs>

    <nu-card gap="2x">
      <nu-h2>Typography</nu-h2>
      <nu-spacer/>
      <nu-h3>Headings</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-h1>Heading level 1</nu-h1>
<nu-h2>Heading level 2</nu-h2>
<nu-h3>Heading level 3</nu-h3>
<nu-h4>Heading level 4</nu-h4>
<nu-h5>Heading level 5</nu-h5>
<nu-h6>Heading level 6</nu-h6>
          </textarea>`,
        }}></nu-code>
        <nu-block as="preview">
          <nu-grid columns="1pr 1pr||1pr" gap="2x" radius border="1ow #bold-bg" overflow="n">
            <nu-flow gap="1x" padding="2x">
              <nu-h1>Heading level 1</nu-h1>
              <nu-h2>Heading level 2</nu-h2>
              <nu-h3>Heading level 3</nu-h3>
              <nu-h4>Heading level 4</nu-h4>
              <nu-h5>Heading level 5</nu-h5>
              <nu-h6>Heading level 6</nu-h6>
            </nu-flow>
            <nu-flow gap="1x" padding="2x" fill="bold-bg" color="white">
              <nu-h1>Heading level 1</nu-h1>
              <nu-h2>Heading level 2</nu-h2>
              <nu-h3>Heading level 3</nu-h3>
              <nu-h4>Heading level 4</nu-h4>
              <nu-h5>Heading level 5</nu-h5>
              <nu-h6>Heading level 6</nu-h6>
            </nu-flow>
          </nu-grid>
        </nu-block>
      </nu-grid>
      <nu-spacer/>
      <nu-h3>Text sizes</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-block size="xxl">Very very large</nu-block>
<nu-block size="xl">Very large</nu-block>
<nu-block size="lg">Large</nu-block>
<nu-block size="md">Medium</nu-block>
<nu-block size="sm">Small</nu-block>
<nu-block size="xs" text="b">Very small</nu-block>
<nu-block size="xxs" text="b">Very very small</nu-block>
          </textarea>`,
        }}></nu-code>
        <nu-block as="preview">
          <nu-grid columns="1pr 1pr||1pr" gap="2x" radius border="1ow #bold-bg" overflow="n">
            <nu-flow gap="1x" padding="2x">
              <nu-block size="xxl">Very very large</nu-block>
              <nu-block size="xl">Very large</nu-block>
              <nu-block size="lg">Large</nu-block>
              <nu-block size="md">Medium</nu-block>
              <nu-block size="sm">Small</nu-block>
              <nu-block size="xs" text="w7">Very small</nu-block>
              <nu-block size="xxs" text="w7">Very very small</nu-block>
            </nu-flow>
            <nu-flow gap="1x" padding="2x" fill="bold-bg" color="white">
              <nu-block size="xxl">Very very large</nu-block>
              <nu-block size="xl">Very large</nu-block>
              <nu-block size="lg">Large</nu-block>
              <nu-block size="md">Medium</nu-block>
              <nu-block size="sm">Small</nu-block>
              <nu-block size="xs" text="b">Very small</nu-block>
              <nu-block size="xxs" text="b">Very very small</nu-block>
            </nu-flow>
          </nu-grid>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Buttons</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn>Button</nu-btn>
<nu-btn is-red>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn>Button</nu-btn>
              <nu-btn {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-red>Button</nu-btn>
              <nu-btn is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Special button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn special>Button</nu-btn>
<nu-btn is-red special>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn special>Button</nu-btn>
              <nu-btn special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn special is-red>Button</nu-btn>
              <nu-btn special is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn special is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn special is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn special is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Clear button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn clear>Button</nu-btn>
<nu-btn is-red clear>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn clear>Button</nu-btn>
              <nu-btn clear {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn clear {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn clear {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn clear {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn clear clear clear is-red>Button</nu-btn>
              <nu-btn clear clear is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn clear is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn clear clear is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn clear is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h3>Big button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn is-big>Button</nu-btn>
<nu-btn is-big is-red>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn is-big special>Button</nu-btn>
              <nu-btn is-big special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-big special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-big special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-big special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-big is-red special>Button</nu-btn>
              <nu-btn is-big is-red special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-big is-red special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-big is-red special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-big is-red special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Inputs</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic input</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-input placeholder="Input"/>
<nu-input placeholder="Input" is-red/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-input placeholder="Input"/>
              <nu-input placeholder="Focus" outline="y"/>
              <nu-input disabled placeholder="Disabled"/>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-input is-red placeholder="Input"/>
              <nu-input is-red placeholder="Focus" outline="y"/>
              <nu-input is-red disabled placeholder="Disabled"/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Component: CardBlock</nu-h2>

      <ImportSnippet name="CardBlock" />

      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<CardBlock>Card content</CardBlock>
<CardBlock bold>Card content</CardBlock>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flow gap="2x 1x">
            <CardBlock>Card content</CardBlock>
            <CardBlock bold>Card content</CardBlock>
          </nu-flow>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Component: SmallSignUpCard</nu-h2>

      <ImportSnippet name="SmallSignUpCard" />

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<SmallSignUpCard 
  description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
        </textarea>`,
      }}></nu-code>

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow padding="2x 0">
        <SmallSignUpCard
          description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Component: BigSignUpCard</nu-h2>

      <ImportSnippet name="BigSignUpCard" />

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<BigSignUpCard
  heading="Want to run Cube Cloud\non-prem for&nbsp;your&nbsp;enterprise?"
  description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
        </textarea>`,
      }}></nu-code>

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow padding="2x 0">
        <BigSignUpCard
          heading="Want to run Cube Cloud\non-prem for&nbsp;your&nbsp;enterprise?"
          description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Component: Hero</nu-h2>

      <ImportSnippet name="Hero" />

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<Hero
  logo="cloudLogo"
  heading="Deploy, Scale, and&nbsp;Optimize Your&nbsp;Cube.js&nbsp;Apps"
  description="Secure and&nbsp;highly&nbsp;available managed&nbsp;deployment\nby&nbsp;the&nbsp;creators of&nbsp;Cube.js"/>
        </textarea>`,
      }}></nu-code>

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow>
        <Hero
          logo="cloudLogo"
          heading="Deploy, Scale, and&nbsp;Optimize Your&nbsp;Cube.js&nbsp;Apps"
          description="Secure and&nbsp;highly&nbsp;available managed&nbsp;deployment\nby&nbsp;the&nbsp;creators of&nbsp;Cube.js"/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: Topbar</nu-h2>

      <ImportSnippet name="Topbar" />

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow>
        <Topbar/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: SubscriptionBlock</nu-h2>

      <ImportSnippet name="SubscriptionBlock" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)" shadow>
        <SubscriptionBlock/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: Footer</nu-h2>

      <ImportSnippet name="Footer" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)">
        <Footer/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: SwitchBlock</nu-h2>

      <ImportSnippet name="SwitchBlock" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)" fill shadow>
        <SwitchBlock
          heading="How Cube Cloud Works"
          options={TYPES}/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: FeatureBlock</nu-h2>

      <ImportSnippet name="FeatureBlock" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)" fill shadow>
        <FeatureBlock
          heading="Production Grade Cube.js Deployment"
          description="Created by Cube.js authors, Cube&nbsp;Cloud is the&nbsp;most&nbsp;reliable, scalable, and secure&nbsp;way to&nbsp;deploy your&nbsp;production Cube.js clusters."
          features={FEATURES}/>
      </nu-block>
    </nu-card>
  </nu-flow>);
}
