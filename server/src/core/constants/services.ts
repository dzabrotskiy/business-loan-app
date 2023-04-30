type ServiceValue = {
  url: string;
};

type Services = Record<string, ServiceValue>;

export const decisionEngineUrl: string = 'http://localhost:3001';

export const services: Services = {
  MYOB: {
    url: 'http://localhost:3002',
  },
  XERO: {
    url: 'http://localhost:3003',
  },
};
