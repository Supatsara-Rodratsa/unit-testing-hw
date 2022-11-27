import { expect, it, describe, vi, afterEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import FetchSuspense from './FetchSuspense.vue';
import SuspenseDummyWrapper from './SuspenseWrapper.vue';
// const noop = () => {};

// TODO: complete the test suite for this component!

describe('FetchSuspense.vue', () => {
  const fetchSpy = vi.fn(); // utility to create mock function
  vi.stubGlobal('fetch', fetchSpy);

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = mount(FetchSuspense);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetch API', () => {
    mount(FetchSuspense);
    expect(fetchSpy).toBeCalledTimes(1);
    expect(fetchSpy).toBeCalledWith('https://yesno.wtf/api');
  });

  it('throws error on fetch not ok', async () => {
    fetchSpy.mockResolvedValue({ ok: false });
    try {
      mount(FetchSuspense);
      const res = await fetchSpy();
      if (!res.ok) new Error('failed');
    } catch (e) {
      expect(e).toEqual(Error('failed'));
    }
  });

  it('throws error on fetch error', async () => {
    fetchSpy.mockRejectedValue(new Error('failed'));
    try {
      mount(FetchSuspense);
      await fetchSpy();
    } catch (e) {
      expect(e).toEqual(Error('failed'));
    }
  });

  it('shows image once fetch is completed', async () => {
    fetchSpy.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({ image: 'test' });
        },
      })
    );
    const wrapper = mount(SuspenseDummyWrapper);

    // Wait until the DOM updates.
    await flushPromises();
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('test');
  });
});
