import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import 'babel-polyfill';

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.expect = chai.expect;
