import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import Ratings from '../Rating.vue';

describe('Ratings.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Ratings);
    expect(wrapper.exists()).toBe(true);
  });

  // TODO: how to test for prop score here?
  it('renders prop score correctly', () => {
    const wrapper = mount(Ratings, {
      propsData: {
        score: 'test',
      },
    });
    expect(wrapper.props('score')).toBe('test');
  });
});
