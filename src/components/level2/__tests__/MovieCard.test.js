import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MovieCard from '../MovieCard.vue';

describe('MovieCard.vue', () => {
  const movie = {
    id: 'id',
    title: 'title',
    score: 'score',
    picture: 'image',
  };

  it('renders correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('prop image are rendered correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(movie.picture);
  });

  it('prop title are rendered correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
      },
    });

    const title = wrapper.find('.movie-title');
    expect(title.text()).toBe(movie.title);
  });

  it('prop score are rendered correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
      },
    });

    expect(wrapper.text()).toContain(movie.score);
  });

  it("rest computed from prop favoriteMovie is rendering the 😍 emoji when the prop movie's id is matching", () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
        favoriteMovie: movie.id,
      },
    });
    expect(wrapper.vm.isFavorite).toBe('😍');
  });

  it('test event favorite-selected is being emitted on button click', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: { ...movie },
      },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('favorite-selected');
    expect(wrapper.emitted('favorite-selected')[0][0]).toEqual(movie.id);
  });
});
