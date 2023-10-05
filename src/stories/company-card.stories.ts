import type { Meta, StoryObj } from '@storybook/svelte';

import { REACT, ANGULAR } from '$lib/images/tech-logo';
import CompanyCard from '../components/company-card/company-card.svelte';
import '../routes/styles.css';

const meta = {
  title: 'Components/CompanyCard',
  component: CompanyCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<CompanyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Yso: Story = {
  args: {
    name: 'YSO Corp',
    description: 'Developeur fullstack - I work with multiple technlogie for multiple clients on multiple kind of project',
  },
};

