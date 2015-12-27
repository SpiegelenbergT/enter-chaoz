import {it, describe, expect, inject, beforeEachProviders} from 'angular2/testing';

import {TruncatePipe} from '../../../../src/scripts/shared/pipes/truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

	beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('transforms "Hello World!" to "Hello"', () => {
    expect(pipe.transform('Hello World!', ['5'])).toEqual('Hello');
  });

  it('transforms "Hello World!" to "Hello..."', () => {
    expect(pipe.transform('Hello World!', ['5', '...'])).toEqual('Hello...');
  });

  it('leaves "Hello World!" unchanged', () => {
    expect(pipe.transform('Hello World!', [])).toEqual('Hello World!');
  });
});
