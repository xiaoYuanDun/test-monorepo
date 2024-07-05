import React, { useState, useEffect } from 'react';
import { init, preloadRemote, loadRemote } from '@module-federation/runtime';

const getRunPlugins = () => {
  return {
    name: 'app1RuntimePlugin',
    beforePreloadRemote: (...args) => {
      console.log('...', args);
    },
  };
};

init({
  name: 'app1',
  plugins: [getRunPlugins()],
});

function useDynamicImport({ module, scope }) {
  console.log(module, scope);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (!module && !scope) return;
    const loadComponent = async () => {
      const { default: component } = await loadRemote(`${scope}/${module}`);
      setComponent(() => component);
    };
    loadComponent();
  }, [module, scope]);
  const fallback = () => null;
  return component || fallback;
}

const App = () => {
  const [{ module, scope }, setSystem] = useState({});

  const setApp2 = () => setSystem({ scope: 'app2', module: 'Widget' });
  const Component = useDynamicImport({ module, scope });

  const handlePreloadRemote = () => {
    preloadRemote([{ nameOrAlias: 'app2', resourceCategory: 'all' }]);
  };

  const loadOrigin = () => {
    import('app2/Widget').then(m => {
      console.log('m', m);
      // const manifestRemoteEndTime = Date.now();
      // console.log('loadManifestProvider');
      // setManifestTime(manifestRemoteEndTime - manifestRemoteStartTime);
      // // @ts-ignore
      // setManifestRemote({ default: m.default });
    });
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>App 1</h2>
      <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and{' '}
        <strong>exposes</strong>. It will no load components that have been loaded already.
      </p>

      <br />

      <button onClick={handlePreloadRemote}>Preload.</button>

      <br />

      <button onClick={setApp2}>Load App 2 Widget</button>

      <br />

      <button onClick={loadOrigin}>Load App 2 Widget Origin import</button>

      <div style={{ marginTop: '2em' }}>
        <React.Suspense fallback="Loading System">
          <Component />
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
