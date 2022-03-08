const local = {
  apiHost: "http://localhost",
  apiPort: "3000",
};

const dev = {
  apiHost: "http://localhost",
  apiPort: "3000",
};

const prod = {
  apiHost: "http://localhost",
  apiPort: "3000",
};

const stageConfigs = {
  local: local,
  dev: dev,
  prod: prod,
};

const config = {
  ...stageConfigs[process.env.REACT_APP_STAGE],
};

export default config;
