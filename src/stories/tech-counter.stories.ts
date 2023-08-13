import type { Meta, StoryObj } from '@storybook/svelte';

import { REACT, ANGULAR } from '$lib/images/tech-logo';
import TechCounter from '../components/tech-counter/tech-counter.svelte';
import '../routes/styles.css';

const meta = {
  title: 'Components/TechCounter',
  component: TechCounter,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: {
        type: 'number',
        min: 0,
        max: 99,
        default: 0,
        step: 1,
      },
    },
    logo: {
      control: {
        type: 'file',
      },
    },
  },
} satisfies Meta<TechCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Empty: Story = {
  args: {
    count: 0,
    logo: null,
  },
};

export const React: Story = {
  args: {
    count: 4,
    logo: REACT,
  },
};

