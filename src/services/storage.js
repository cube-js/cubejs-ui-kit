import Lockr from 'lockr';

Lockr.prefix = 'cubejs-uikit_';

const stab = {
  set() {},
  get() {},
};

let exportStorage = typeof window === 'undefined' ? stab : Lockr;

export default exportStorage;
