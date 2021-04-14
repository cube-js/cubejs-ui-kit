/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
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
import mainIllustration from '../assets/cube-illustration.svg';
import hybridImg from '../assets/hybrid.svg';
import hostedImg from '../assets/hosted.svg';
// import onPremImg from '../assets/onprem.svg';
import SwitchBlock from '../components/SwitchBlock';
import { attrs } from '../helpers';
import Heading from '../components/Heading';
import GettingStarted from '../components/GettingStarted';
import GridLines from '../components/GridLines';
import ExploreCubeCloud from '../components/ExploreCubeCloud';
import Select from '../components/Select';
import CopyButton from '../components/CopyButton';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Link from '../components/Link';
import Icon from '../components/Icon';

const FullWidthBlock = (props) => {
  return <nu-block
    space="0 (@content-padding + 1bw)" fill shadow
    transition="fill" {...attrs(props)}
  >
    {props.children}
  </nu-block>
}

const TYPES = [
  {
    image: hostedImg,
    id: 'hosted',
    heading: 'Hosted',
    description: 'Deploy fully managed Cube.js apps in the cloud of your choice: AWS, Azure, or GCP. With best-in-class infrastructure and proven practices, Cube Cloud guarantees high availability, scalability, and improved performance.\\n\\nCube Cloud provisions and manages API instances, caching layer, background refresh schedulers, and external databases for pre-aggregations. It supports multi-tenant deployments both on database and instance levels.'
  },
  {
    image: hybridImg,
    id: 'hybrid',
    heading: 'Hybrid',
    description: 'With Cube Cloud Hybrid, you can provision and manage the whole Cube.js stack inside your cloud. \\n\\n Kubernetes-based deployment ensures a one-way connection from your cluster to the Cube Cloud. Your cluster pulls Kubernetes config and images to install.',
    imageAttrs: {
      space: '3x top||6x bottom',
      height: '100% + 3x||100% + 6x',
    },
  }
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
  border: '#main.60 :special[#hover] :clear[hidden]',
  fill: 'bg :special[hover] :clear[hidden]',
  // color: 'hover :special[white]',
  mark: '#hover.10 :special[n]',
};
const PRESSED_STYLES = {
  border: '#main :clear[#main.60]',
  fill: 'bg :special[main]',
  mark: '#hover.10 :special[n]',
};
const FOCUS_STYLES = {
  outline: 'y',
  border: 'hidden',
};
const DISABLED_STYLES = {
  disabled: '',
};

export default function Showcase() {
  return (<nu-flow id="showcase" gap="2x" padding="3x||1x">
    <nu-attrs for="code" radius="" overflow="auto no" padding="1x 2x"/>
    <nu-attrs for="card" padding="2x 3x||2x"/>

    <nu-pane content="space-between">
      <Heading level="1">Cube.js UIKit Showcase</Heading>
      <nu-pane>
        <Button padding toggle control=":root[data-nu-outline]" fill="#bg :pressed[#special-bg]">
          <Icon name="grid-outline"/>
        </Button>
        <Button padding toggle control=":root[data-nu-grid]" fill="#bg :pressed[#special-bg]">
          <Icon name="menu-outline" rotate="90deg"/>
        </Button>
      </nu-pane>
    </nu-pane>

    <nu-attrs for="example" gap="2x" columns="1pr 2pr||1fr" items="start stretch"></nu-attrs>
    <nu-attrs for="preview" padding="2x left" border="1ow left"></nu-attrs>

    <nu-card border="y" fill="#bg" gap="2x">
      <Heading>Typography</Heading>
      <nu-spacer/>
      <Heading level="3">Headings</Heading>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-h1>H1 Cera Pro Medium 42-54</nu-h1>
<nu-h2>H2 Cera Pro Medium 32/44</nu-h2>
<nu-h3>H3 Cera Pro Medium 26/36</nu-h3>
<nu-h4>H4 Cera Pro Medium 20/30</nu-h4>
<nu-h5>H5 Cera Pro Medium 16/26</nu-h5>
<nu-h6>H6 Cera Pro Medium 14/26</nu-h6>
<nu-block as="t1">T1 Cera Pro Regular 18-30</nu-block>
<nu-block as="t2">T2 Cera Pro Regular 16-26</nu-block>
<nu-block as="t3">T3 Cera Pro Regular 14-24</nu-block>
<nu-block as="c1">C1 Cera Pro Regular 16-22</nu-block>
<nu-block as="c2">C2 Cera Pro Regular 14-22</nu-block>
<nu-block as="p1">P1 Cera Pro Regular 18-32</nu-block>
          </textarea>`,
        }}></nu-code>
        <nu-block as="preview">
          <nu-grid columns="1pr 1pr||1pr" gap="2x" radius border="1ow #dark-02" overflow="n">
            <nu-flow gap="1x" padding="2x">
              <nu-h1>H1 Cera Pro Medium 42-54</nu-h1>
              <nu-h2>H2 Cera Pro Medium 32/44</nu-h2>
              <nu-h3>H3 Cera Pro Medium 26/36</nu-h3>
              <nu-h4>H4 Cera Pro Medium 20/30</nu-h4>
              <nu-h5>H5 Cera Pro Medium 16/26</nu-h5>
              <nu-h6>H6 Cera Pro Medium 14/26</nu-h6>
              <nu-block as="t1">T1 Cera Pro Regular 18-30</nu-block>
              <nu-block as="t2">T2 Cera Pro Regular 16-26</nu-block>
              <nu-block as="t3">T3 Cera Pro Regular 14-24</nu-block>
              <nu-block as="c1">C1 Cera Pro Regular 16-22</nu-block>
              <nu-block as="c2">C2 Cera Pro Regular 14-22</nu-block>
              <nu-block as="p1">P1 Cera Pro Regular 18-32</nu-block>
            </nu-flow>
            <nu-flow gap="1x" padding="2x" fill="#dark-02" color="#white">
              <nu-h1>H1 Cera Pro Medium 42-54</nu-h1>
              <nu-h2>H2 Cera Pro Medium 32/44</nu-h2>
              <nu-h3>H3 Cera Pro Medium 26/36</nu-h3>
              <nu-h4>H4 Cera Pro Medium 20/30</nu-h4>
              <nu-h5>H5 Cera Pro Medium 16/26</nu-h5>
              <nu-h6>H6 Cera Pro Medium 14/26</nu-h6>
              <nu-block as="t1">T1 Cera Pro Regular 18-30</nu-block>
              <nu-block as="t2">T2 Cera Pro Regular 16-26</nu-block>
              <nu-block as="t3">T3 Cera Pro Regular 14-24</nu-block>
              <nu-block as="c1">C1 Cera Pro Regular 16-22</nu-block>
              <nu-block as="c2">C2 Cera Pro Regular 14-22</nu-block>
              <nu-block as="p1">P1 Cera Pro Regular 18-32</nu-block>
            </nu-flow>
          </nu-grid>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Buttons</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Button>Button</Button>
<Button is-purple>Button</Button>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Button use-button="no">Button</Button>
              <Button use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <Button is-purple use-button="no">Button</Button>
              <Button is-purple use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button is-purple use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button is-purple use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button is-purple use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Special button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Button special>Button</Button>
<Button is-purple special>Button</Button>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Button special use-button="no">Button</Button>
              <Button special use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button special use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button special use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button special use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <Button special is-purple use-button="no">Button</Button>
              <Button special is-purple use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button special is-purple use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button special is-purple use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button special is-purple use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Clear button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Button clear>Button</Button>
<Button is-purple clear>Button</Button>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Button clear use-button="no">Button</Button>
              <Button clear use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button clear use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button clear use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button clear use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <Button clear is-purple use-button="no">Button</Button>
              <Button clear is-purple use-button="no" {...HOVER_STYLES}>Hover</Button>
              <Button clear is-purple use-button="no" {...PRESSED_STYLES}>Pressed</Button>
              <Button clear is-purple use-button="no" {...FOCUS_STYLES}>Focus</Button>
              <Button clear is-purple use-button="no" {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h3>Big button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Button is-big>Button</Button>
<Button is-big is-purple>Button</Button>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Button is-big special use-button="no">Button</Button>
              <Button is-big special {...HOVER_STYLES}>Hover</Button>
              <Button is-big special {...PRESSED_STYLES}>Pressed</Button>
              <Button is-big special {...FOCUS_STYLES}>Focus</Button>
              <Button is-big special {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <Button is-big is-purple special use-button="no">Button</Button>
              <Button is-big is-purple special {...HOVER_STYLES}>Hover</Button>
              <Button is-big is-purple special {...PRESSED_STYLES}>Pressed</Button>
              <Button is-big is-purple special {...FOCUS_STYLES}>Focus</Button>
              <Button is-big is-purple special {...DISABLED_STYLES}>Disabled</Button>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Links</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Link to="!https://github.com/cube-js">Cube.js GitHub</Link>
<Link pink to="!https://github.com/cube-js">Cube.js GitHub</Link>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Link to="!https://github.com/cube-js">Cube.js GitHub</Link>
              <Link pink to="!https://github.com/cube-js">Cube.js GitHub</Link>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Inputs</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic input</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-input placeholder="Input"/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-input placeholder="Input"/>
              <nu-input placeholder="Focus" outline="y" border="hidden"/>
              <nu-input value="Input Text"/>
              <nu-input value="Invalid Input" is-invalid/>
              <nu-input disabled placeholder="Disabled"/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer/>

      <nu-h3>Big input</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-input is-big placeholder="Input"/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-input is-big placeholder="Input"/>
              <nu-input is-big placeholder="Focus" outline="y" border="hidden"/>
              <nu-input is-big value="Input Text"/>
              <nu-input is-big value="Invalid Input" is-invalid/>
              <nu-input is-big disabled placeholder="Disabled"/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer/>

      <nu-h3>File input</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-fileinput placeholder="Input"/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="column" gap>
              <nu-fileinput/>
              <nu-fileinput disabled/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer/>

      <nu-h3>Form field</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-field>
  <nu-label>Form label</nu-label>
  <nu-input placeholder="Input"/>
</nu-field>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-field>
                <nu-label>Form label</nu-label>
                <nu-input placeholder="Input"/>
              </nu-field>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Select</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic select</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Select
  value="react"
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ]}/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Select
                value="react"
                width="min 12"
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular' },
                ]}/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>

      <nu-spacer></nu-spacer>
      <nu-h3>Multiple select</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<Select
  value="react"
  multiple
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ]}/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <Select
                value="react"
                multiple
                width="min 12"
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular' },
                ]}/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Copy Button</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<CopyButton copy="Text to copy" />
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <CopyButton special copy="Text to copy"/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Component: CardBlock</nu-h2>

      <ImportSnippet name="CardBlock"/>

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<CardBlock>Card content</CardBlock>
<CardBlock bold>Card content</CardBlock>
        </textarea>`,
      }}>
      </nu-code>
      <FullWidthBlock>
        <nu-flow gap="2x 1x" fill="#light" padding="2x 0">
          <CardBlock>Card content</CardBlock>
          <CardBlock bold>Card content</CardBlock>
        </nu-flow>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Component: Banner</nu-h2>

      <ImportSnippet name="Banner"/>

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<Banner to="!https://cube.dev">
  Аnalytical data access layer for modern web applications
</Banner>
        </textarea>`,
      }}></nu-code>

      <FullWidthBlock padding="2x 0">
        <Banner to="!https://cube.dev">Аnalytical data access layer for modern web
          applications</Banner>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Component: SmallSignUpCard</nu-h2>

      <ImportSnippet name="SmallSignUpCard"/>

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<SmallSignUpCard 
  description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\n\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
        </textarea>`,
      }}></nu-code>

      <FullWidthBlock padding="2x 0">
        <SmallSignUpCard
          description="Cube&nbsp;Cloud is&nbsp;currently in&nbsp;early&nbsp;access with a&nbsp;select few&nbsp;design&nbsp;partners.\n\nSign&nbsp;up for&nbsp;the&nbsp;waitlist to&nbsp;be in&nbsp;the&nbsp;next cohort&nbsp;of&nbsp;partners"/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Component: BigSignUpCard</nu-h2>

      <ImportSnippet name="BigSignUpCard"/>

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<BigSignUpCard
  heading="Want to run Cube Cloud\non-prem for your enterprise?"/>
        </textarea>`,
      }}></nu-code>

      <FullWidthBlock padding="2x 0" fill="#light">
        <BigSignUpCard
          heading="Want to run Cube Cloud\non-prem for your enterprise?"/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Component: Hero</nu-h2>

      <ImportSnippet name="Hero"/>

      <nu-code dangerouslySetInnerHTML={{
        __html: `<textarea>
<Hero
  image="cloudLogo"
  heading="Run, manage, scale and&nbsp;optimize\nyour&nbsp;Cube.js&nbsp;Apps."
  description="Leave&nbsp;uptime, devops and&nbsp;deployment to&nbsp;the&nbsp;creators of&nbsp;Cube.js.\nSecure and&nbsp;highly&nbsp;available managed&nbsp;deployment\nby&nbsp;the&nbsp;creators of&nbsp;Cube.js"/>
<Hero
  wide
  githubBadge
  badge="Open Source"
  image={mainIllustration}
  heading="Аnalytical data access layer for modern web applications"
  description="Cube.js is an open source framework which is great for building internal business intelligence tools or adding customer-facing analytics to existing applications"/>
        </textarea>`,
      }}></nu-code>

      <FullWidthBlock>
        <Hero
          image="cubeCloud"
          heading="Run, manage, scale and&nbsp;optimize\nyour&nbsp;Cube.js&nbsp;Apps"
          description="Leave&nbsp;uptime, devops and&nbsp;deployment to&nbsp;the&nbsp;creators of&nbsp;Cube.js.\nSecure and&nbsp;highly&nbsp;available managed&nbsp;deployment\nby&nbsp;the&nbsp;creators of&nbsp;Cube.js"/>
      </FullWidthBlock>

      <nu-spacer/>

      <FullWidthBlock>
        <Hero
          wide
          githubBadge
          badge="Open Source"
          image={mainIllustration}
          heading="Аnalytical data access layer for modern web applications"
          description="Cube.js is an open source framework which is great for building internal business intelligence tools or adding customer-facing analytics to existing applications"/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: Topbar</nu-h2>

      <ImportSnippet name="Topbar"/>

      <FullWidthBlock height="15">
        <Topbar sticky getStarted/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: SubscriptionBlock</nu-h2>

      <ImportSnippet name="SubscriptionBlock"/>

      <FullWidthBlock>
        <SubscriptionBlock
          heading="Custom heading"
          description="Custom description"
          successMessage="Custom success message"
        />
      </FullWidthBlock>

      <nu-spacer/>

      <FullWidthBlock>
        <SubscriptionBlock special/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: Footer</nu-h2>

      <ImportSnippet name="Footer"/>

      <FullWidthBlock>
        <Footer/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: SwitchBlock</nu-h2>

      <ImportSnippet name="SwitchBlock"/>

      <FullWidthBlock>
        <SwitchBlock
          heading="How Cube Cloud Works"
          options={TYPES}/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: FeatureBlock</nu-h2>

      <ImportSnippet name="FeatureBlock"/>

      <FullWidthBlock>
        <FeatureBlock
          heading="Production Grade Cube.js Deployment"
          description="Created by Cube.js authors, Cube&nbsp;Cloud is the&nbsp;most&nbsp;reliable, scalable, and secure&nbsp;way to&nbsp;deploy your&nbsp;production Cube.js clusters."
          features={FEATURES}/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: GettingStarted</nu-h2>

      <ImportSnippet name="GettingStarted"/>

      <FullWidthBlock>
        <GettingStarted/>
      </FullWidthBlock>
    </nu-card>

    <nu-card border="y" fill="#bg" gap="2x">
      <nu-h2>Block: ExploreCubeCloud</nu-h2>

      <ImportSnippet name="ExploreCubeCloud"/>

      <FullWidthBlock padding="2x" fill="#light">
        <ExploreCubeCloud/>
      </FullWidthBlock>
    </nu-card>

    <GridLines/>
  </nu-flow>);
}
