import React from "react";
import SiteBlock from "./SiteBlock";
import { attrs } from "../helpers";
import CopyButton from "./CopyButton";
import Link from "./Link";
import T from "prop-types";

export const INSTALL_COMMAND_NODE = "npx cubejs-cli create hello-world";
export const INSTALL_COMMAND_DOCKER =
  "docker run -p 4000:4000 \
    -v ${PWD} cube:/cube/conf \
    -e CUBEJS_DEV_MODE=true \
    cubejs/cube";
export const START_TEXT = "and follow our";
export const END_TEXT = "guide.";
export const LINK_URL = "!https://cube.dev/docs/getting-started";
export const LINK_TEXT = "Getting Started";
export default function GettingStarted(props) {
  return (
    <SiteBlock
      id="getting-started"
      pink
      heading={props.heading || "Get started with Cube.js"}
      {...attrs(props)}
    >
      <nu-flex flow="column" gap="2x">
        <nu-block
          as="t1"
          color="#dark-03"
          text="left"
          width="8sp || --content-width"
        >
          Start with Node.js:
        </nu-block>
        <nu-flex width="8sp || --content-width" gap height="min 9x">
          <nu-card
            display="flex"
            flow="row"
            items="center"
            padding="0"
            content="center start"
            width="100%"
            text="monospace nowrap"
            fill="#bg"
            as="h4"
            overflow="auto hidden"
            radius
            border="n"
          >
            <nu-block height="100%" padding="18rp" fill="#95CD40">
              <nu-svg
                place="center"
                src="/static/images/logos/node.svg"
              ></nu-svg>
            </nu-block>
            {props.nodeCommand || INSTALL_COMMAND_NODE}
            <CopyButton
              as="t2"
              place="absolute right"
              move="-12rp"
              width="10x"
              height="6x"
              special
              copy={props.nodeCommand || INSTALL_COMMAND_NODE}
              onCopy={props.onCopy}
              show="y|||n"
            >
              Copy
            </CopyButton>
          </nu-card>
        </nu-flex>
      </nu-flex>
      <nu-flex flow="column" gap="2x">
        <nu-block
          as="t1"
          color="#dark-03"
          text="left"
          width="8sp || --content-width"
        >
          Start with Docker:
        </nu-block>
        <nu-flex width="8sp || --content-width" gap height="min 20x">
          <nu-card
            display="flex"
            flow="row"
            items="center"
            padding="0"
            content="center start"
            width="100%"
            text="monospace nowrap"
            fill="#bg"
            as="h4"
            overflow="auto hidden"
            radius
            border="n"
          >
            <nu-block height="100%" padding="18rp 14rp" fill="#5B9EEF">
              <nu-svg
                place="center"
                src="/static/images/logos/docker.svg"
              ></nu-svg>
            </nu-block>
            <nu-el
              height="100%"
              padding="2rp 0"
              text="left"
              dangerouslySetInnerHTML={{
                __html: `<pre style="font-family: var(--monospace-font);">docker run -p 4000:4000 \\ 
    -v \${PWD} cube:/cube/conf \\ 
    -e CUBEJS_DEV_MODE=true \\    
    cubejs/cube</pre>`,
              }}
            ></nu-el>
            {/* prettier-ignore */}
            <CopyButton
              as="t2"
              place="absolute top right"
              move="-12rp 12rp"
              width="10x"
              height="6x"
              special
              copy={props.dockerCommand || INSTALL_COMMAND_DOCKER}
              onCopy={props.onCopy}
              show="y|||n"
            >
              Copy
            </CopyButton>
          </nu-card>
        </nu-flex>
      </nu-flex>
      <nu-block color="#dark-03" as="t2">
        {props.start || START_TEXT}{" "}
        <Link is-pink to={props.link || LINK_URL}>
          {props.text || LINK_TEXT}
        </Link>{" "}
        {props.end || END_TEXT}
      </nu-block>
    </SiteBlock>
  );
}

GettingStarted.propTypes = {
  heading: T.string,
  start: T.string,
  end: T.string,
  nodeCommand: T.string,
  dockerCommand: T.string,
  text: T.string,
  link: T.string,
  onCopy: T.func,
};
