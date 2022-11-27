import { expect, it, describe, vi, afterEach } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import MovieCard from '../MovieCard.vue';
import dataService from '../utils/dataService';

describe('MovieList.vue', () => {
  const mockMoveList = [{ id: 1 }, { id: 2 }];
  const spy = vi.spyOn(dataService, 'getMovies').mockReturnValue(mockMoveList);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(MovieList);

    expect(wrapper.exists()).toBe(true);
  });

  // TODO: Why is this a bad test? Reason your answer
  // TODO: Rework the test so it follows best practices
  it('should render movie list', () => {
    
    const wrapper = shallowMount(MovieList);
    const movieCards = wrapper.findAllComponents(MovieCard);
    expect(spy).toBeCalledTimes(1);
    expect(movieCards.length).toBe(mockMoveList.length);
  });

  // TODO: write this test!
  it('should have no favorite movie by default', () => {
    const wrapper = shallowMount(MovieList);
    const selector = wrapper.find('select');
    expect(selector.element.value).toBeFalsy();
  });

  // TODO: TDD time!
  // Make this test pass by adding the missing functionality in the MovieList.vue component
  // TODO: After you made the test pass, rework the test so it follows best practices
  it('should update favorite movie on favorite-selected event received', async () => {
    const wrapper = mount(MovieList);
    const movieCard = wrapper.findAllComponents(MovieCard)[0];
    await movieCard.vm.$emit('favorite-selected', '1');
    await wrapper.vm.$nextTick();
    const select = wrapper.find('option:checked');
    console.log(select);
    expect(select.exists()).toBeTruthy();
  });
});
