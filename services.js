// Illustrative demo topology, not an authoritative bank inventory.
const serviceProfiles = {
  payments: { name: 'Payments & Transfers', rto: '60m', rpo: '5m', nodes: [['Mobile Banking', 'Channel'], ['Payments API', 'App'], ['Core Banking', 'Core'], ['Azure EU West', 'Cloud'], ['SWIFT', 'Vendor']] },
  cards: { name: 'Card Authorization', rto: '30m', nodes: [['Card Channels', 'Channel'], ['Card Authorization API', 'App'], ['Card Processing', 'Core'], ['Azure EU West', 'Cloud']] },
  digital: { name: 'Digital Banking', rto: '120m', nodes: [['Mobile Banking', 'Channel'], ['API Gateway', 'App'], ['Core Banking', 'Core'], ['Azure EU West', 'Cloud']] },
  onboarding: { name: 'Customer Onboarding', rto: '240m', nodes: [['Digital Banking', 'Channel'], ['Onboarding API', 'App'], ['Core Banking', 'Core']] },
  lending: { name: 'SME Lending', rto: '240m', nodes: [['Loan Origination', 'App'], ['Lending API', 'App'], ['Core Banking', 'Core']] },
};

function selectService(id) {
  const profile = serviceProfiles[id];
  if (!profile) return;
  document.getElementById('serviceName').textContent = profile.name;
  document.getElementById('serviceTargets').textContent = `RTO ${profile.rto} · RPO ${profile.rpo || 'not modeled'} · illustrative mapping`;
  const flow = document.getElementById('serviceFlow');
  flow.replaceChildren();
  profile.nodes.forEach(([name, kind], index) => {
    if (index) {
      const arrow = document.createElement('span');
      arrow.className = 'arr';
      arrow.textContent = '→';
      flow.appendChild(arrow);
    }
    const node = document.createElement('div');
    node.className = 'node';
    node.textContent = name;
    const label = document.createElement('small');
    label.textContent = kind;
    node.appendChild(label);
    if (name === 'Azure EU West' || name === 'SWIFT') {
      node.setAttribute('role', 'button');
      node.setAttribute('tabindex', '0');
      node.setAttribute('aria-label', `Simulate ${name} disruption`);
      node.onclick = () => sim(name);
      node.onkeydown = event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); sim(name); }
      };
    }
    flow.appendChild(node);
  });
  document.querySelectorAll('[data-service]').forEach(button => {
    const selected = button.dataset.service === id;
    button.setAttribute('aria-pressed', String(selected));
    button.style.background = selected ? '#eaf7f3' : '';
  });
}

document.querySelectorAll('[data-service]').forEach(button => {
  button.onclick = () => selectService(button.dataset.service);
});
selectService('payments');
