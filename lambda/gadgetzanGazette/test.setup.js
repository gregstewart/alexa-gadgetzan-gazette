import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'babel-polyfill';

chai.use(chaiAsPromised);

global.expect = chai.expect;
