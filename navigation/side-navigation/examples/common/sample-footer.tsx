/** @jsx jsx */
import React, { Fragment } from 'react';

import { jsx } from '@emotion/react';

import Button from '@atlaskit/button';
import Icon from '@atlaskit/icon';
import { CustomItemComponentProps } from '@atlaskit/menu';

import { Footer } from '@atlaskit/side-navigation';

import SampleIcon from './next-gen-project-icon';

export const CustomItemFooter: React.FC<CustomItemComponentProps> = ({
  children,
  ...props
}) => {
  const Component = props.onClick ? 'a' : 'div';
  return (
    <Component
      // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
      {...props}
    >
      {children}
    </Component>
  );
};

// This example footer conforms to a design taken from Jira designs found at
// https://www.figma.com/file/GA22za6unqO2WsBWM0Ddxk/Jira-navigation-3?node-id=124%3A7194
const ExampleFooter = () => (
  <Footer
    component={CustomItemFooter}
    description={
      <Fragment>
        <Button appearance="subtle-link" href="/feedback" spacing="none">
          Give feedback
        </Button>
        {' ∙ '}
        <Button appearance="subtle-link" href="/learn" spacing="none">
          Learn more
        </Button>
      </Fragment>
    }
    iconBefore={<Icon label="mode" glyph={SampleIcon} />}
  >
    You're in a next-gen project
  </Footer>
);

export default ExampleFooter;
