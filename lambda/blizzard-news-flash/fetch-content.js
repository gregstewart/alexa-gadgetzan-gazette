import fetch from 'node-fetch';

export const fetchFile = () => {
  return fetch('http://www.icy-veins.com/').then((res) => {
      return res.text();
  });
}
