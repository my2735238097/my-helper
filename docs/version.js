var version = '1.9.5';
if (typeof window !== 'undefined') {
  window.version = version;
} else {
  module.exports = version;
}