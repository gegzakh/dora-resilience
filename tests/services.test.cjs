const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

test('all five service buttons select their own map and recovery target', () => {
  function element() { return { textContent: '', children: [], style: {}, attributes: {}, appendChild(child) { this.children.push(child); }, replaceChildren() { this.children = []; }, setAttribute(key, value) { this.attributes[key] = value; } }; }
  const ids = Object.fromEntries(['serviceName', 'serviceFlow', 'serviceTargets'].map(id => [id, element()]));
  const buttons = ['payments', 'cards', 'digital', 'onboarding', 'lending'].map(id => ({ ...element(), dataset: { service: id } }));
  const simulations = [];
  const context = { sim: provider => simulations.push(provider), document: { getElementById: id => ids[id], createElement: element, querySelectorAll: () => buttons } };
  vm.createContext(context);
  vm.runInContext(readFileSync(join(__dirname, '..', 'services.js'), 'utf8'), context);
  for (const [index, name, rto] of [[0, 'Payments & Transfers', '60m'], [1, 'Card Authorization', '30m'], [2, 'Digital Banking', '120m'], [3, 'Customer Onboarding', '240m'], [4, 'SME Lending', '240m']]) {
    buttons[index].onclick();
    assert.equal(ids.serviceName.textContent, name);
    assert.match(ids.serviceTargets.textContent, new RegExp(`RTO ${rto}`));
    assert.equal(buttons.filter(button => button.attributes['aria-pressed'] === 'true').length, 1);
  }
  buttons[0].onclick();
  ids.serviceFlow.children.find(node => node.textContent === 'SWIFT').onclick();
  assert.deepEqual(simulations, ['SWIFT']);
});
