
const jasmine_util = require('@tensorflow/tfjs-core/dist/jasmine_util');
function runTests(jasmineUtil, specFiles) {
    // tslint:disable-next-line:no-require-imports
    const jasmineConstructor = require('jasmine');
  
    Error.stackTraceLimit = Infinity;
  
    process.on('unhandledRejection', e => {
      throw e;
    });
  
    jasmineUtil.setTestEnvs(
        [{name: 'node', factory: jasmineUtil.CPU_FACTORY, features: {}}]);
  
    const runner = new jasmineConstructor();
    runner.loadConfig({spec_files: specFiles, random: false});
    runner.execute();
  }

runTests(jasmine_util, ['./*test.js']);
