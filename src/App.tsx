import { Switch, Route } from '@jupiter/plugin-runtime/router';
import { ReactComponent as Logo } from './Logo.svg';

import './App.css';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <div className="container">
          <main>
            <div className="logo">
              <Logo />
            </div>
            <p className="description">
              Get started by editing <code className="code">src/App.tsx</code>
            </p>
            <div className="grid">
              <a
                href="https://jupiter.goofy.app/guide/quick-start/develop-mobile-project"
                className="card">
                <h2>Quick Start</h2>
              </a>
              <a
                href="https://jupiter.goofy.app/guide/handbook"
                className="card">
                <h2>Handbook</h2>
              </a>
              <a href="https://jupiter.goofy.app/api/" className="card">
                <h2>API Reference </h2>
              </a>
              <a
                href="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=4eeoe668-2f4b-46d0-8344-03ae79f39093"
                target="_blank"
                rel="noopener noreferrer"
                className="card">
                <h2>Community </h2>
              </a>
            </div>
          </main>
          <footer className="footer">
            <a
              href="https://jupiter.goofy.app/"
              target="_blank"
              rel="noopener noreferrer">
              Powered by Jupiter
            </a>
          </footer>
        </div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
