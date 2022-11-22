import { describe, expect, it } from 'vitest';
import { getMoonScore } from '../utils/moonScore';

describe('getMoonScore', () => {
  it('should return blank for score 0', () => {
    const score = getMoonScore(0);
    expect(score).toBe('');
  });

  // TODO: Add missing test cases here
  // for ALL possible outputs of this helper function
  // Tip: don't repeat implementation details in the test
  // just rely on inputs/outputs

  it('should return blank if score is not number', () => {
    const score = getMoonScore('test');
    expect(score).toBe('');
  });

  it('should render 5 full moons if score 100', () => {
    const score = getMoonScore(100);
    // {n} matches the previous regex token exactly n times
    expect(score).toMatch(/^(🌕){5}$/);
  });

  it('should render 5 full moons if score is more than 90', () => {
    const score = getMoonScore(91);
    expect(score).toMatch(/^(🌕){5}$/);
  });

  it('should render 4 full moons and 1 half moon if score is between 87 and 91', () => {
    const regex = /^(🌕){4}(🌗){1}$/;
    const score88 = getMoonScore(88);
    expect(score88).toMatch(regex);
    const score90 = getMoonScore(90);
    expect(score90).toMatch(regex);
  });

  it('should render 4 full moons if score is between 70 and 88', () => {
    const regex = /^(🌕){4}$/;
    const score71 = getMoonScore(71);
    expect(score71).toMatch(regex);
    const score87 = getMoonScore(87);
    expect(score87).toMatch(regex);
  });

  it('should render 3 full moons and 1 half moon if score is between 68 and 71', () => {
    const regex = /^(🌕){3}(🌗){1}$/;
    const score69 = getMoonScore(69);
    expect(score69).toMatch(regex);
    const score70 = getMoonScore(70);
    expect(score70).toMatch(regex);
  });

  it('should render 3 full moons if score is between 50 and 69', () => {
    const regex = /^(🌕){3}$/;
    const score50 = getMoonScore(51);
    expect(score50).toMatch(regex);
    const score68 = getMoonScore(68);
    expect(score68).toMatch(regex);
  });

  it('should render 2 full moons and 1 half moon if score is between 48 and 51', () => {
    const regex = /^(🌕){2}(🌗){1}$/;
    const score50 = getMoonScore(50);
    expect(score50).toMatch(regex);
    const score49 = getMoonScore(49);
    expect(score49).toMatch(regex);
  });

  it('should render 2 full moons if score is between 30 and 49', () => {
    const regex = /^(🌕){2}$/;
    const score50 = getMoonScore(31);
    expect(score50).toMatch(regex);
    const score48 = getMoonScore(48);
    expect(score48).toMatch(regex);
  });

  it('should render 1 full moons if score is between 28 and 31', () => {
    const regex = /^(🌕){1}(🌗){1}$/;
    const score29 = getMoonScore(29);
    expect(score29).toMatch(regex);
    const score30 = getMoonScore(30);
    expect(score30).toMatch(regex);
  });

  it('should render 1 full moons if score is between 10 and 29', () => {
    const regex = /^(🌕){1}$/;
    const score11 = getMoonScore(11);
    expect(score11).toMatch(regex);
    const score28 = getMoonScore(28);
    expect(score28).toMatch(regex);
  });

  it('should render 1 full moons if score is between 7 and 11', () => {
    const regex = /^(🌗){1}$/;
    const score8 = getMoonScore(8);
    expect(score8).toMatch(regex);
    const score10 = getMoonScore(10);
    expect(score10).toMatch(regex);
  });

  it('should return blank if score is less than 8', () => {
    const score = getMoonScore(7);
    expect(score).toBe('');
  });
});
